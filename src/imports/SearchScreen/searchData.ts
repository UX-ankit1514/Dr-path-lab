// Complete test catalog for Dr. Lal PathLabs smart search
export interface TestItem {
  id: string;
  name: string;
  shortName?: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  homeCollection: boolean;
  reportTime: string;
  testCount?: number;
  category: string;
  // Keywords include: official names, abbreviations, symptoms, body-language terms, misspellings
  keywords: string[];
}

export const testCatalog: TestItem[] = [
  // ── DENGUE ──
  {
    id: "dengue-ns1",
    name: "Dengue NS1 Antigen Test",
    shortName: "Dengue NS1",
    description: "Detects dengue infection in the early stage (1-7 days of fever).",
    price: 799,
    originalPrice: 999,
    discount: 20,
    homeCollection: true,
    reportTime: "Same Day",
    testCount: 1,
    category: "Fever",
    keywords: [
      "dengue", "dengi", "dengu", "denge", "dengoo", "dangue", "dangoo",
      "dengue fever", "dengue test", "ns1", "ns1 antigen",
      "mosquito bite fever", "high fever body pain", "joint pain fever",
      "platelet drop", "tropical fever", "break bone fever",
      "dengue mosquito", "aedes", "hemorrhagic fever",
    ],
  },
  {
    id: "dengue-igg-igm",
    name: "Dengue IgG & IgM Antibody Test",
    shortName: "Dengue Antibody",
    description: "Detects past or recent dengue infection through antibodies.",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    homeCollection: true,
    reportTime: "Same Day",
    testCount: 2,
    category: "Fever",
    keywords: [
      "dengue", "dengi", "dengu", "denge", "dengoo",
      "dengue antibody", "igg", "igm", "dengue igg", "dengue igm",
      "past dengue", "dengue immunity", "dengue second time",
      "mosquito fever", "platelet", "platelets low",
    ],
  },
  {
    id: "dengue-panel",
    name: "Dengue Complete Panel",
    shortName: "Dengue Panel",
    description: "Complete dengue workup: NS1, IgG, IgM, and CBC for comprehensive analysis.",
    price: 1499,
    originalPrice: 1999,
    discount: 25,
    homeCollection: true,
    reportTime: "Same Day",
    testCount: 4,
    category: "Fever",
    keywords: [
      "dengue", "dengi", "dengu", "denge",
      "dengue complete", "dengue panel", "dengue full",
      "dengue package", "dengue profile", "dengue all tests",
      "fever full checkup", "mosquito bite test",
    ],
  },

  // ── THYROID ──
  {
    id: "thyroid-profile",
    name: "Thyroid Profile (T3, T4, TSH)",
    shortName: "Thyroid Profile",
    description: "Measures thyroid hormones to detect hyper/hypothyroidism.",
    price: 699,
    originalPrice: 899,
    discount: 22,
    homeCollection: true,
    reportTime: "24 hrs",
    testCount: 3,
    category: "Thyroid",
    keywords: [
      "thyroid", "thyriod", "thairoid", "thyrod", "thryoid", "thyroid test",
      "tsh", "t3", "t4", "t3 t4 tsh", "thyroid profile",
      "thyroid function", "thyroid panel",
      "weight gain", "hair fall", "fatigue", "tired",
      "weight loss unexplained", "feeling cold", "goiter",
      "neck swelling", "metabolism", "hormones",
      "hypothyroid", "hyperthyroid", "hypothyroidism", "hyperthyroidism",
    ],
  },
  {
    id: "tsh",
    name: "TSH (Thyroid Stimulating Hormone)",
    shortName: "TSH Test",
    description: "Screening test for thyroid function disorders.",
    price: 299,
    originalPrice: 399,
    discount: 25,
    homeCollection: true,
    reportTime: "24 hrs",
    testCount: 1,
    category: "Thyroid",
    keywords: [
      "tsh", "thyroid", "thyriod", "tsh test",
      "thyroid screening", "thyroid basic",
      "weight gain test", "hair loss test", "fatigue test",
    ],
  },

  // ── CBC / BLOOD ──
  {
    id: "cbc",
    name: "Complete Blood Count (CBC)",
    shortName: "CBC",
    description: "Measures red cells, white cells, platelets, and hemoglobin levels.",
    price: 349,
    originalPrice: 499,
    discount: 30,
    homeCollection: true,
    reportTime: "Same Day",
    testCount: 1,
    category: "Blood",
    keywords: [
      "cbc", "blood count", "complete blood count", "blood test",
      "hemoglobin", "haemoglobin", "hb test", "rbc", "wbc", "platelets",
      "anemia", "anaemia", "infection test", "blood report",
      "basic blood test", "routine blood test",
      "immunity check", "white blood cells", "red blood cells",
      "general blood test", "full blood count",
    ],
  },

  // ── DIABETES ──
  {
    id: "diabetes-screening",
    name: "Diabetes Screening (FBS + HbA1c)",
    shortName: "Diabetes Test",
    description: "Checks fasting blood sugar and 3-month average sugar levels.",
    price: 599,
    originalPrice: 799,
    discount: 25,
    homeCollection: true,
    reportTime: "24 hrs",
    testCount: 2,
    category: "Diabetes",
    keywords: [
      "diabetes", "diabeties", "diabetis", "diabtes", "sugar", "sugar test",
      "blood sugar", "glucose", "fasting sugar", "fbs", "fasting blood sugar",
      "hba1c", "glycated hemoglobin", "a1c",
      "high sugar", "sugar level", "sugar check",
      "thirst frequent", "frequent urination", "weight loss",
      "diabetes screening", "diabetes test", "sugar fasting",
    ],
  },
  {
    id: "hba1c",
    name: "HbA1c (Glycated Hemoglobin)",
    shortName: "HbA1c",
    description: "Average blood sugar control over the past 2-3 months.",
    price: 449,
    originalPrice: 599,
    discount: 25,
    homeCollection: true,
    reportTime: "24 hrs",
    testCount: 1,
    category: "Diabetes",
    keywords: [
      "hba1c", "a1c", "glycated", "hemoglobin a1c",
      "sugar average", "3 month sugar", "sugar control",
      "diabetes monitoring", "diabetes control",
      "long term sugar", "sugar management",
    ],
  },

  // ── VITAMIN D ──
  {
    id: "vitamin-d",
    name: "Vitamin D (25-Hydroxy)",
    shortName: "Vitamin D",
    description: "Detects Vitamin D deficiency linked to bone and immunity issues.",
    price: 959,
    originalPrice: 1119,
    discount: 14,
    homeCollection: true,
    reportTime: "24 hrs",
    testCount: 1,
    category: "Vitamins",
    keywords: [
      "vitamin d", "vit d", "vitamine d", "vitamin d test",
      "25 hydroxy", "25-oh", "vitamin d3",
      "bone pain", "back pain", "weak bones", "osteoporosis",
      "muscle pain", "fatigue", "tired all the time",
      "calcium absorption", "sunshine vitamin",
      "joint pain", "body pain", "weakness",
    ],
  },

  // ── FULL BODY CHECKUP ──
  {
    id: "full-body-checkup",
    name: "Full Body Checkup (Essential)",
    shortName: "Full Body Checkup",
    description: "Comprehensive package covering 70+ tests for complete health screening.",
    price: 1499,
    originalPrice: 2999,
    discount: 50,
    homeCollection: true,
    reportTime: "48 hrs",
    testCount: 70,
    category: "Packages",
    keywords: [
      "full body", "full body checkup", "complete checkup", "health checkup",
      "annual checkup", "yearly checkup", "master health",
      "complete health", "full test", "all tests",
      "general checkup", "preventive health", "health package",
      "full body test", "whole body checkup", "complete body",
      "routine checkup", "annual health", "comprehensive",
    ],
  },
  {
    id: "full-body-advance",
    name: "Full Body Checkup (Advanced)",
    shortName: "Full Body Advanced",
    description: "Advanced package with 90+ tests including cardiac, liver, and kidney markers.",
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    homeCollection: true,
    reportTime: "48 hrs",
    testCount: 90,
    category: "Packages",
    keywords: [
      "full body advanced", "advanced checkup", "premium checkup",
      "advanced health", "complete advanced", "full body premium",
      "heart liver kidney", "organ checkup", "detailed checkup",
    ],
  },

  // ── LIVER ──
  {
    id: "liver-function",
    name: "Liver Function Test (LFT)",
    shortName: "LFT",
    description: "Evaluates liver health by measuring enzymes and proteins.",
    price: 499,
    originalPrice: 699,
    discount: 29,
    homeCollection: true,
    reportTime: "24 hrs",
    testCount: 1,
    category: "Liver",
    keywords: [
      "liver", "lft", "liver function", "liver test", "liver profile",
      "sgpt", "sgot", "alt", "ast", "bilirubin", "alkaline phosphatase",
      "jaundice", "yellowish eyes", "yellow skin", "fatty liver",
      "liver damage", "alcohol damage", "liver enzymes",
      "liver health", "abdomen pain right side",
    ],
  },

  // ── KIDNEY ──
  {
    id: "kidney-function",
    name: "Kidney Function Test (KFT)",
    shortName: "KFT",
    description: "Checks kidney health through creatinine, urea, and electrolytes.",
    price: 549,
    originalPrice: 749,
    discount: 27,
    homeCollection: true,
    reportTime: "24 hrs",
    testCount: 1,
    category: "Kidney",
    keywords: [
      "kidney", "kft", "kidney function", "kidney test", "renal",
      "creatinine", "urea", "bun", "electrolytes", "gfr",
      "kidney health", "kidney damage", "renal function",
      "swelling feet", "urine problem", "kidney stone",
      "back pain lower", "kidney profile",
    ],
  },

  // ── LIPID / CHOLESTEROL ──
  {
    id: "lipid-profile",
    name: "Lipid Profile (Cholesterol Test)",
    shortName: "Lipid Profile",
    description: "Measures total cholesterol, HDL, LDL, and triglycerides.",
    price: 449,
    originalPrice: 599,
    discount: 25,
    homeCollection: true,
    reportTime: "24 hrs",
    testCount: 1,
    category: "Heart",
    keywords: [
      "lipid", "cholesterol", "cholestrol", "colesterol", "lipid profile",
      "hdl", "ldl", "triglycerides", "triglyserides",
      "heart test", "cardiac risk", "fat in blood",
      "cholesterol check", "cholesterol test", "lipid test",
      "heart health", "cardiovascular",
    ],
  },

  // ── VITAMIN B12 ──
  {
    id: "vitamin-b12",
    name: "Vitamin B12 Test",
    shortName: "Vitamin B12",
    description: "Detects B12 deficiency causing fatigue, numbness, and weakness.",
    price: 699,
    originalPrice: 899,
    discount: 22,
    homeCollection: true,
    reportTime: "24 hrs",
    testCount: 1,
    category: "Vitamins",
    keywords: [
      "vitamin b12", "b12", "vit b12", "vitamine b12",
      "cobalamin", "cyanocobalamin",
      "numbness", "tingling", "tingling hands feet",
      "fatigue", "weakness", "nerve damage",
      "vegetarian deficiency", "anemia",
    ],
  },

  // ── URINE ──
  {
    id: "urine-routine",
    name: "Urine Routine & Microscopy",
    shortName: "Urine Test",
    description: "Basic urine analysis for infections, kidney issues, and diabetes markers.",
    price: 199,
    originalPrice: 299,
    discount: 33,
    homeCollection: false,
    reportTime: "Same Day",
    testCount: 1,
    category: "Urine",
    keywords: [
      "urine", "urine test", "urine routine", "urine analysis",
      "uti", "urinary tract infection", "burning urine",
      "pee test", "urine infection", "urine culture",
      "protein in urine", "sugar in urine",
    ],
  },

  // ── IRON ──
  {
    id: "iron-studies",
    name: "Iron Studies (Serum Iron + TIBC + Ferritin)",
    shortName: "Iron Test",
    description: "Complete iron assessment for anemia and iron deficiency diagnosis.",
    price: 799,
    originalPrice: 1099,
    discount: 27,
    homeCollection: true,
    reportTime: "24 hrs",
    testCount: 3,
    category: "Blood",
    keywords: [
      "iron", "iron test", "iron deficiency", "ferritin", "tibc",
      "serum iron", "iron studies",
      "anemia", "anaemia", "low iron", "pale skin",
      "fatigue", "dizziness", "hair fall", "brittle nails",
    ],
  },

  // ── FEVER PANEL ──
  {
    id: "fever-panel",
    name: "Fever Panel (Comprehensive)",
    shortName: "Fever Panel",
    description: "Tests for dengue, malaria, typhoid, and other common fever causes.",
    price: 1299,
    originalPrice: 1799,
    discount: 28,
    homeCollection: true,
    reportTime: "24 hrs",
    testCount: 8,
    category: "Fever",
    keywords: [
      "fever", "fever test", "fever panel", "fever package",
      "fever not going", "continuous fever", "high fever",
      "malaria", "typhoid", "dengue", "chikungunya",
      "viral fever", "bacterial infection",
      "fever from 3 days", "recurring fever",
    ],
  },

  // ── ALLERGY ──
  {
    id: "allergy-panel",
    name: "Allergy Panel (IgE Total + Common Allergens)",
    shortName: "Allergy Test",
    description: "Identifies common food and environmental allergies.",
    price: 1999,
    originalPrice: 2799,
    discount: 29,
    homeCollection: true,
    reportTime: "72 hrs",
    testCount: 30,
    category: "Allergy",
    keywords: [
      "allergy", "allergies", "alergy", "allergi",
      "ige", "ige total", "allergen",
      "food allergy", "dust allergy", "pollen allergy",
      "skin rash", "itching", "hives", "sneezing",
      "runny nose", "watery eyes", "allergic reaction",
    ],
  },

  // ── COVID ──
  {
    id: "covid-rtpcr",
    name: "COVID-19 RT-PCR Test",
    shortName: "COVID RT-PCR",
    description: "Gold standard test for active COVID-19 infection detection.",
    price: 499,
    originalPrice: 699,
    discount: 29,
    homeCollection: true,
    reportTime: "24 hrs",
    testCount: 1,
    category: "COVID",
    keywords: [
      "covid", "corona", "coronavirus", "covid 19", "covid test",
      "rtpcr", "rt-pcr", "pcr test", "corona test",
      "sars cov", "covid positive", "covid negative",
      "travel test", "airport test",
    ],
  },
];

// ── Popular Searches ──
export const popularSearches = [
  { label: "Dengue Test", icon: "🦟" },
  { label: "Thyroid Profile", icon: "🦋" },
  { label: "CBC", icon: "🩸" },
  { label: "Diabetes Test", icon: "💉" },
  { label: "Vitamin D", icon: "☀️" },
  { label: "Full Body Checkup", icon: "🏥" },
  { label: "Liver Function", icon: "🫁" },
  { label: "Lipid Profile", icon: "❤️" },
];

// ── Health Concern Categories ──
export const healthConcerns = [
  { label: "Fever & Infections", query: "fever", color: "#FF6B6B" },
  { label: "Diabetes & Sugar", query: "diabetes", color: "#4ECDC4" },
  { label: "Heart & Cholesterol", query: "cholesterol", color: "#FF8E53" },
  { label: "Thyroid Disorders", query: "thyroid", color: "#A78BFA" },
  { label: "Vitamin Deficiency", query: "vitamin", color: "#F59E0B" },
  { label: "Kidney & Liver", query: "kidney liver", color: "#10B981" },
];
