// Single source of truth for the dashboard UI.
// Edit values here and refresh the page to see updates.

export const tradingData = {
  // Required fields
  currentDay: 1,
  startingBalance: 3000,
  targetBalance: 15000,

  // Optional (but used to ensure EVERYTHING is data-driven)
  brand: "midlifeonsol",
  mission:
    "Full port. Zero bag holding. No options. Total transparency.\nThe calmest way to climb from $3k to $15k—one honest day at a time.",
  socials: {
    instagram: "https://instagram.com/",
    x: "https://x.com/",
    tiktok: "https://tiktok.com/",
    youtube: "https://youtube.com/",
  },
  rules: [
    {
      title: "Full Port",
      description:
        "One focused position at a time. No scattered conviction—just clarity and accountability.",
      icon: "anchor",
    },
    {
      title: "Zero Bag Holding",
      description:
        "If the thesis breaks, the trade ends. No coping. No marrying. No drifting.",
      icon: "shield-check",
    },
    {
      title: "No Options",
      description:
        "No leverage. No time decay. Just spot discipline and clean execution.",
      icon: "ban",
    },
    {
      title: "Total Transparency",
      description:
        "Every entry, exit, and mistake is logged. The ledger is the mirror.",
      icon: "scan-text",
    },
  ],

  // Required fields
  dailyStats: [
    { date: "2026-02-01", balance: 3000, pnl: 0 },
    { date: "2026-02-02", balance: 3125, pnl: 125 },
    { date: "2026-02-03", balance: 3068, pnl: -57 },
    { date: "2026-02-04", balance: 3290, pnl: 222 },
    { date: "2026-02-05", balance: 3215, pnl: -75 },
    { date: "2026-02-06", balance: 3470, pnl: 255 },
    { date: "2026-02-07", balance: 3610, pnl: 140 },
    { date: "2026-02-08", balance: 3542, pnl: -68 },
    { date: "2026-02-09", balance: 3888, pnl: 346 },
    { date: "2026-02-10", balance: 4025, pnl: 137 },
    { date: "2026-02-11", balance: 3950, pnl: -75 },
  ],

  transactions: [
    {
      ticker: "SOL",
      type: "BUY",
      price: 96.12,
      shares: 8.0,
      total: 768.96,
      date: "2026-02-02 09:41",
    },
    {
      ticker: "SOL",
      type: "SELL",
      price: 101.55,
      shares: 3.0,
      total: 304.65,
      date: "2026-02-02 14:18",
    },
    {
      ticker: "BONK",
      type: "BUY",
      price: 0.0000198,
      shares: 2500000,
      total: 49.5,
      date: "2026-02-03 11:07",
    },
    {
      ticker: "SOL",
      type: "BUY",
      price: 98.44,
      shares: 6.5,
      total: 639.86,
      date: "2026-02-04 10:12",
    },
    {
      ticker: "SOL",
      type: "SELL",
      price: 107.05,
      shares: 4.5,
      total: 481.73,
      date: "2026-02-06 13:29",
    },
    {
      ticker: "WIF",
      type: "BUY",
      price: 0.92,
      shares: 350,
      total: 322.0,
      date: "2026-02-08 12:44",
    },
    {
      ticker: "WIF",
      type: "SELL",
      price: 1.14,
      shares: 200,
      total: 228.0,
      date: "2026-02-09 15:03",
    },
    {
      ticker: "SOL",
      type: "BUY",
      price: 104.2,
      shares: 5.0,
      total: 521.0,
      date: "2026-02-10 09:58",
    },
  ],
};

