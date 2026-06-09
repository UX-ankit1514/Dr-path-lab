import { TestItem, testCatalog } from "./searchData";

/**
 * Levenshtein distance — counts min single-char edits (insert / delete / replace)
 * to transform string `a` into string `b`.
 */
function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

/**
 * Check if `query` is a fuzzy substring of `target`:
 * true when the target contains a contiguous slice whose Levenshtein
 * distance to the query is ≤ `maxDist`.
 */
function fuzzySubstring(query: string, target: string, maxDist: number): boolean {
  if (target.includes(query)) return true;
  const qLen = query.length;
  // Slide a window (qLen-1 .. qLen+1) across target
  for (let winSize = Math.max(1, qLen - 1); winSize <= qLen + 1; winSize++) {
    for (let i = 0; i <= target.length - winSize; i++) {
      const slice = target.substring(i, i + winSize);
      if (levenshtein(query, slice) <= maxDist) return true;
    }
  }
  return false;
}

export interface SearchResult {
  item: TestItem;
  score: number; // lower = better match
  matchType: "exact" | "partial" | "fuzzy" | "keyword";
  correctedQuery?: string; // "Did you mean: …?"
}

/**
 * Smart search with:
 *   1. Exact name match   (score 0)
 *   2. Partial name match (score 1)
 *   3. Exact keyword match (score 2)
 *   4. Partial keyword match (score 3)
 *   5. Fuzzy name match   (score 4 + edit-distance)
 *   6. Fuzzy keyword match (score 5 + edit-distance)
 */
export function smartSearch(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results: SearchResult[] = [];
  const seen = new Set<string>();

  const push = (item: TestItem, score: number, matchType: SearchResult["matchType"], correctedQuery?: string) => {
    if (seen.has(item.id)) return;
    seen.add(item.id);
    results.push({ item, score, matchType, correctedQuery });
  };

  // Pass 1 — exact / partial name match
  for (const item of testCatalog) {
    const name = item.name.toLowerCase();
    const short = (item.shortName || "").toLowerCase();
    if (name === q || short === q) {
      push(item, 0, "exact");
    } else if (name.includes(q) || short.includes(q)) {
      push(item, 1, "partial");
    }
  }

  // Pass 2 — exact / partial keyword match
  for (const item of testCatalog) {
    for (const kw of item.keywords) {
      const kwLower = kw.toLowerCase();
      if (kwLower === q) {
        push(item, 2, "keyword");
        break;
      }
      if (kwLower.includes(q) || q.includes(kwLower)) {
        push(item, 3, "keyword");
        break;
      }
    }
  }

  // Pass 3 — fuzzy name match (edit distance ≤ 2)
  const maxDist = q.length <= 3 ? 1 : 2;
  for (const item of testCatalog) {
    const name = item.name.toLowerCase();
    const short = (item.shortName || "").toLowerCase();
    const nameDist = levenshtein(q, short || name.split(" ")[0]);
    if (nameDist > 0 && nameDist <= maxDist) {
      push(item, 4 + nameDist, "fuzzy", item.shortName || item.name);
    }
  }

  // Pass 4 — fuzzy keyword match
  for (const item of testCatalog) {
    for (const kw of item.keywords) {
      const kwLower = kw.toLowerCase();
      if (fuzzySubstring(q, kwLower, maxDist) || fuzzySubstring(kwLower, q, maxDist)) {
        push(item, 5, "fuzzy", item.shortName || item.name);
        break;
      }
    }
  }

  // Sort by score (lower = better), then alphabetically
  results.sort((a, b) => a.score - b.score || a.item.name.localeCompare(b.item.name));

  return results;
}

/**
 * Derive a "Did you mean: …?" suggestion from the top fuzzy result.
 */
export function getDidYouMean(query: string): string | null {
  const q = query.toLowerCase().trim();
  if (!q || q.length < 3) return null;

  const results = smartSearch(q);
  // Only suggest if results exist AND none are exact/partial
  const hasDirectMatch = results.some(
    (r) => r.matchType === "exact" || r.matchType === "partial"
  );
  if (hasDirectMatch) return null;

  const topFuzzy = results.find((r) => r.matchType === "fuzzy" || r.matchType === "keyword");
  return topFuzzy ? topFuzzy.item.shortName || topFuzzy.item.name : null;
}
