import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router";
import { StatusBar } from "../../app/components/StatusBar";
import { smartSearch, getDidYouMean, SearchResult } from "./fuzzySearch";
import { popularSearches, healthConcerns, TestItem } from "./searchData";

/* ─────────────────────────────────────────────
   Persistent recent-searches (localStorage)
   ───────────────────────────────────────────── */
const RECENT_KEY = "lal-path-recent-searches";
const MAX_RECENT = 6;

function getRecent(): string[] {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
  } catch {
    return [];
  }
}
function addRecent(q: string) {
  const list = getRecent().filter((s) => s !== q);
  list.unshift(q);
  localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0, MAX_RECENT)));
}
function clearRecent() {
  localStorage.removeItem(RECENT_KEY);
}

/* ─────────────────────────────────────────────
   Cart state (simple in-memory for demo)
   ───────────────────────────────────────────── */
const cartSet = new Set<string>();

/* ─────────────────────────────────────────────
   SVG Icons (inline, no external deps)
   ───────────────────────────────────────────── */
function SearchIcon({ size = 20, color = "#233F64" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle cx="8.5" cy="8.5" r="6" stroke={color} strokeWidth="2" />
      <line x1="13" y1="13" x2="18" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function ArrowLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12.5 15L7.5 10L12.5 5" stroke="#233F64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5.5" stroke="#9CA3AF" strokeWidth="1.2" />
      <path d="M7 4V7.5L9.5 9" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
function CloseIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M4 4L12 12M12 4L4 12" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function HomeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 1L1 5.5V11H4.5V7.5H7.5V11H11V5.5L6 1Z" stroke="#43A155" strokeWidth="1" fill="#D1FFDA" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6" fill="#43A155" />
      <path d="M4.5 7L6.5 9L9.5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function VoiceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="7" y="2" width="6" height="10" rx="3" stroke="#233F64" strokeWidth="1.5" />
      <path d="M4 9C4 12.3137 6.68629 15 10 15C13.3137 15 16 12.3137 16 9" stroke="#233F64" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="15" x2="10" y2="18" stroke="#233F64" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function TrendingIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 10L5 6L8 8L13 3" stroke="#FBC52D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 3H13V7" stroke="#FBC52D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Result Card
   ───────────────────────────────────────────── */
function ResultCard({ item, onAddToCart, isInCart }: { item: TestItem; onAddToCart: (id: string) => void; isInCart: boolean }) {
  return (
    <div className="bg-white rounded-[12px] border border-[#F0F0F0] overflow-hidden" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
      <div className="p-[14px]">
        {/* Top row: Name + Discount */}
        <div className="flex items-start justify-between gap-[8px]">
          <div className="flex-1 min-w-0">
            <p className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#233F64] leading-[1.3]">
              {item.name}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[10px] text-[#6B7280] leading-[1.4] mt-[3px]">
              {item.description}
            </p>
          </div>
          {item.discount && (
            <div className="shrink-0 bg-[#D1FFDA] px-[6px] py-[3px] rounded-[4px]">
              <p className="font-['Inter',sans-serif] font-semibold text-[9px] text-[#43A155] whitespace-nowrap">
                {item.discount}% OFF
              </p>
            </div>
          )}
        </div>

        {/* Info row */}
        <div className="flex items-center gap-[12px] mt-[10px]">
          {item.testCount && (
            <div className="flex items-center gap-[3px]">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <circle cx="5" cy="5" r="4" stroke="#9CA3AF" strokeWidth="0.8" />
                <text x="5" y="7.5" textAnchor="middle" fontSize="5.5" fill="#9CA3AF" fontFamily="Inter">i</text>
              </svg>
              <p className="font-['Inter',sans-serif] font-medium text-[9px] text-[#9CA3AF]">
                {item.testCount} {item.testCount === 1 ? "Test" : "Tests"}
              </p>
            </div>
          )}
          <div className="flex items-center gap-[3px]">
            <ClockIcon />
            <p className="font-['Inter',sans-serif] font-medium text-[9px] text-[#9CA3AF]">
              {item.reportTime}
            </p>
          </div>
          {item.homeCollection && (
            <div className="flex items-center gap-[3px] bg-[#F0FFF4] px-[5px] py-[2px] rounded-[3px]">
              <HomeIcon />
              <p className="font-['Inter',sans-serif] font-medium text-[8px] text-[#43A155]">
                Home Collection
              </p>
            </div>
          )}
        </div>

        {/* Bottom row: Price + CTA */}
        <div className="flex items-center justify-between mt-[12px]">
          <div className="flex items-baseline gap-[6px]">
            <p className="font-['Inter',sans-serif] font-bold text-[15px] text-[#23408E]">
              ₹{item.price.toLocaleString("en-IN")}
            </p>
            {item.originalPrice && (
              <p className="font-['Inter',sans-serif] font-normal text-[11px] text-[#9CA3AF] line-through">
                ₹{item.originalPrice.toLocaleString("en-IN")}
              </p>
            )}
          </div>
          <button
            onClick={() => onAddToCart(item.id)}
            className={`flex items-center gap-[5px] px-[12px] py-[7px] rounded-[8px] transition-all duration-200 active:scale-[0.97] ${
              isInCart
                ? "bg-[#D1FFDA] border border-[#43A155]"
                : "bg-[#FBC52D] border border-transparent"
            }`}
          >
            {isInCart ? (
              <>
                <CheckIcon />
                <p className="font-['Inter',sans-serif] font-semibold text-[11px] text-[#43A155]">Added</p>
              </>
            ) : (
              <p className="font-['Inter',sans-serif] font-semibold text-[11px] text-black">Add to Cart</p>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Search Screen
   ───────────────────────────────────────────── */
export default function SearchScreen() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [didYouMean, setDidYouMean] = useState<string | null>(null);
  const [recentSearches, setRecentSearches] = useState<string[]>(getRecent());
  const [cart, setCart] = useState<Set<string>>(new Set(cartSet));
  const [isTyping, setIsTyping] = useState(false);

  // Auto-focus on mount
  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 150);
    return () => clearTimeout(timer);
  }, []);

  // Debounced search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setDidYouMean(null);
      setIsTyping(false);
      return;
    }
    setIsTyping(true);
    const timer = setTimeout(() => {
      const r = smartSearch(query);
      setResults(r);
      setDidYouMean(getDidYouMean(query));
      setIsTyping(false);
    }, 120);
    return () => clearTimeout(timer);
  }, [query]);

  const handleSearch = useCallback((q: string) => {
    setQuery(q);
    if (q.trim()) addRecent(q.trim());
    setRecentSearches(getRecent());
  }, []);

  const handleAddToCart = useCallback((id: string) => {
    cartSet.has(id) ? cartSet.delete(id) : cartSet.add(id);
    setCart(new Set(cartSet));
  }, []);

  const handleClearRecent = useCallback(() => {
    clearRecent();
    setRecentSearches([]);
  }, []);

  const hasQuery = query.trim().length > 0;
  const showEmptyState = hasQuery && !isTyping && results.length === 0;
  const showResults = hasQuery && results.length > 0;
  const showIdle = !hasQuery;

  return (
    <div className="relative bg-white w-[390px] min-h-[844px] mx-auto overflow-hidden" data-name="Search Screen">
      <StatusBar />

      {/* ── Header with search bar ── */}
      <div className="sticky top-0 z-50 bg-white pt-[52px] pb-[10px] px-[20px]" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
        <div className="flex items-center gap-[10px]">
          {/* Back button */}
          <button
            onClick={() => navigate("/test-packages")}
            className="shrink-0 w-[32px] h-[32px] flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
          >
            <ArrowLeftIcon />
          </button>

          {/* Search input */}
          <div className="flex-1 flex items-center gap-[8px] bg-[#F5F5F5] rounded-[10px] px-[12px] py-[10px] border border-[#EAEAEA] focus-within:border-[#FBC52D] focus-within:bg-white transition-all duration-200">
            <SearchIcon size={18} color="#9CA3AF" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tests, symptoms, packages..."
              className="flex-1 bg-transparent outline-none font-['Inter',sans-serif] font-normal text-[13px] text-[#233F64] placeholder:text-[#9CA3AF]"
            />
            {hasQuery && (
              <button onClick={() => setQuery("")} className="shrink-0 p-[2px]">
                <CloseIcon />
              </button>
            )}
            {!hasQuery && (
              <button className="shrink-0 p-[2px] active:opacity-60">
                <VoiceIcon />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Scrollable content ── */}
      <div className="px-[20px] pb-[100px] overflow-y-auto" style={{ maxHeight: "calc(844px - 100px)" }}>

        {/* ── IDLE STATE: Recent + Popular + Concerns ── */}
        {showIdle && (
          <div className="animate-[fadeIn_0.2s_ease-out]">
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="mt-[16px]">
                <div className="flex items-center justify-between mb-[10px]">
                  <p className="font-['Inter',sans-serif] font-semibold text-[12px] text-[#233F64]">
                    Recent Searches
                  </p>
                  <button onClick={handleClearRecent} className="active:opacity-60">
                    <p className="font-['Inter',sans-serif] font-medium text-[10px] text-[#5C9CDC]">
                      Clear All
                    </p>
                  </button>
                </div>
                <div className="flex flex-col gap-[2px]">
                  {recentSearches.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleSearch(s)}
                      className="flex items-center gap-[10px] py-[10px] px-[4px] rounded-[8px] active:bg-gray-50 transition-colors"
                    >
                      <ClockIcon />
                      <p className="font-['Inter',sans-serif] font-normal text-[12px] text-[#4B5563] flex-1 text-left">
                        {s}
                      </p>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1 11L11 1M11 1V8M11 1H4" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Searches */}
            <div className="mt-[20px]">
              <div className="flex items-center gap-[6px] mb-[12px]">
                <TrendingIcon />
                <p className="font-['Inter',sans-serif] font-semibold text-[12px] text-[#233F64]">
                  Popular Searches
                </p>
              </div>
              <div className="flex flex-wrap gap-[8px]">
                {popularSearches.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => handleSearch(p.label)}
                    className="flex items-center gap-[5px] bg-[#FFF8E1] border border-[#FDE9B6] rounded-[20px] px-[12px] py-[7px] active:scale-[0.97] transition-transform"
                  >
                    <span className="text-[12px]">{p.icon}</span>
                    <p className="font-['Inter',sans-serif] font-medium text-[11px] text-[#233F64]">
                      {p.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Health Concerns */}
            <div className="mt-[24px]">
              <p className="font-['Inter',sans-serif] font-semibold text-[12px] text-[#233F64] mb-[12px]">
                Search by Health Concern
              </p>
              <div className="grid grid-cols-2 gap-[8px]">
                {healthConcerns.map((c) => (
                  <button
                    key={c.label}
                    onClick={() => handleSearch(c.query)}
                    className="flex items-center gap-[8px] bg-white border border-[#F0F0F0] rounded-[10px] px-[12px] py-[12px] active:scale-[0.98] transition-transform"
                    style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                  >
                    <div className="w-[8px] h-[8px] rounded-full shrink-0" style={{ backgroundColor: c.color }} />
                    <p className="font-['Inter',sans-serif] font-medium text-[10px] text-[#374151] text-left leading-[1.3]">
                      {c.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick tip */}
            <div className="mt-[24px] bg-[#EFF6FF] rounded-[10px] px-[14px] py-[12px] border border-[#DBEAFE]">
              <p className="font-['Inter',sans-serif] font-semibold text-[10px] text-[#1E40AF] mb-[3px]">
                Smart Search Tip
              </p>
              <p className="font-['Inter',sans-serif] font-normal text-[10px] text-[#3B82F6] leading-[1.5]">
                You can search by symptoms too! Try "joint pain", "fatigue", "hair fall" or even misspelled words like "diabtes".
              </p>
            </div>
          </div>
        )}

        {/* ── TYPING INDICATOR ── */}
        {isTyping && hasQuery && (
          <div className="mt-[20px] flex items-center justify-center gap-[6px]">
            <div className="w-[6px] h-[6px] bg-[#FBC52D] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-[6px] h-[6px] bg-[#FBC52D] rounded-full animate-bounce" style={{ animationDelay: "100ms" }} />
            <div className="w-[6px] h-[6px] bg-[#FBC52D] rounded-full animate-bounce" style={{ animationDelay: "200ms" }} />
          </div>
        )}

        {/* ── RESULTS STATE ── */}
        {showResults && (
          <div className="mt-[14px] animate-[fadeIn_0.2s_ease-out]">
            {/* "Did you mean" suggestion */}
            {didYouMean && (
              <button
                onClick={() => handleSearch(didYouMean)}
                className="w-full mb-[12px] bg-[#FFF8E1] border border-[#FDE9B6] rounded-[10px] px-[14px] py-[10px] flex items-center gap-[8px] active:bg-[#FEF3C7] transition-colors"
              >
                <SearchIcon size={14} color="#D97706" />
                <p className="font-['Inter',sans-serif] font-normal text-[11px] text-[#92400E]">
                  Did you mean: <span className="font-semibold text-[#D97706]">{didYouMean}</span>?
                </p>
              </button>
            )}

            {/* Result count */}
            <p className="font-['Inter',sans-serif] font-medium text-[10px] text-[#9CA3AF] mb-[10px]">
              {results.length} {results.length === 1 ? "result" : "results"} found
            </p>

            {/* Result cards */}
            <div className="flex flex-col gap-[10px]">
              {results.map((r) => (
                <ResultCard
                  key={r.item.id}
                  item={r.item}
                  onAddToCart={handleAddToCart}
                  isInCart={cart.has(r.item.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── EMPTY STATE ── */}
        {showEmptyState && (
          <div className="mt-[40px] animate-[fadeIn_0.2s_ease-out]">
            {/* No results illustration */}
            <div className="flex flex-col items-center text-center">
              <div className="w-[64px] h-[64px] bg-[#F5F5F5] rounded-full flex items-center justify-center mb-[14px]">
                <SearchIcon size={28} color="#D1D5DB" />
              </div>
              <p className="font-['Inter',sans-serif] font-semibold text-[14px] text-[#233F64]">
                No exact matches found
              </p>
              <p className="font-['Inter',sans-serif] font-normal text-[11px] text-[#9CA3AF] mt-[4px] max-w-[220px]">
                Try different keywords, check your spelling, or search by symptom
              </p>
            </div>

            {/* Popular Tests suggestion */}
            <div className="mt-[28px]">
              <p className="font-['Inter',sans-serif] font-semibold text-[12px] text-[#233F64] mb-[10px]">
                Popular Tests You Can Try
              </p>
              <div className="flex flex-wrap gap-[8px]">
                {popularSearches.slice(0, 6).map((p) => (
                  <button
                    key={p.label}
                    onClick={() => handleSearch(p.label)}
                    className="flex items-center gap-[5px] bg-[#FFF8E1] border border-[#FDE9B6] rounded-[20px] px-[12px] py-[7px] active:scale-[0.97] transition-transform"
                  >
                    <span className="text-[12px]">{p.icon}</span>
                    <p className="font-['Inter',sans-serif] font-medium text-[11px] text-[#233F64]">{p.label}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Health Concerns */}
            <div className="mt-[20px]">
              <p className="font-['Inter',sans-serif] font-semibold text-[12px] text-[#233F64] mb-[10px]">
                Common Health Concerns
              </p>
              <div className="grid grid-cols-2 gap-[8px]">
                {healthConcerns.map((c) => (
                  <button
                    key={c.label}
                    onClick={() => handleSearch(c.query)}
                    className="flex items-center gap-[8px] bg-white border border-[#F0F0F0] rounded-[10px] px-[12px] py-[12px] active:scale-[0.98] transition-transform"
                    style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                  >
                    <div className="w-[8px] h-[8px] rounded-full shrink-0" style={{ backgroundColor: c.color }} />
                    <p className="font-['Inter',sans-serif] font-medium text-[10px] text-[#374151] text-left leading-[1.3]">
                      {c.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Custom CSS animation ── */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
