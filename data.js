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
    { date: "2026-02-02", balance: 3142, pnl: 142 },
    { date: "2026-02-03", balance: 3085, pnl: -57 },
    { date: "2026-02-04", balance: 3318, pnl: 233 },
    { date: "2026-02-05", balance: 3240, pnl: -78 },
    { date: "2026-02-06", balance: 3502, pnl: 262 },
    { date: "2026-02-07", balance: 3645, pnl: 143 },
    { date: "2026-02-08", balance: 3572, pnl: -73 },
    { date: "2026-02-09", balance: 3918, pnl: 346 },
    { date: "2026-02-10", balance: 4055, pnl: 137 },
    { date: "2026-02-11", balance: 3980, pnl: -75 },
  ],

  transactions: [
    { ticker: "SOL", type: "BUY", price: 195.42, shares: 15.0, total: 2931.30, date: "2026-02-01 10:15" },
    { ticker: "SOL", type: "SELL", price: 198.80, shares: 2.0, total: 397.60, date: "2026-02-02 09:22" },
    { ticker: "SOL", type: "SELL", price: 201.15, shares: 3.0, total: 603.45, date: "2026-02-02 14:41" },
    { ticker: "BONK", type: "BUY", price: 0.0000241, shares: 415000, total: 10.00, date: "2026-02-03 08:33" },
    { ticker: "BONK", type: "SELL", price: 0.0000228, shares: 415000, total: 9.46, date: "2026-02-03 11:07" },
    { ticker: "SOL", type: "BUY", price: 197.20, shares: 8.0, total: 1577.60, date: "2026-02-04 10:12" },
    { ticker: "SOL", type: "SELL", price: 207.50, shares: 5.0, total: 1037.50, date: "2026-02-05 13:18" },
    { ticker: "WIF", type: "BUY", price: 2.84, shares: 120, total: 340.80, date: "2026-02-06 11:02" },
    { ticker: "SOL", type: "SELL", price: 212.80, shares: 4.0, total: 851.20, date: "2026-02-06 15:44" },
    { ticker: "WIF", type: "SELL", price: 2.92, shares: 50, total: 146.00, date: "2026-02-07 09:55" },
    { ticker: "JUP", type: "BUY", price: 0.88, shares: 200, total: 176.00, date: "2026-02-07 12:30" },
    { ticker: "JUP", type: "SELL", price: 0.85, shares: 200, total: 170.00, date: "2026-02-08 10:15" },
    { ticker: "WIF", type: "SELL", price: 3.18, shares: 70, total: 222.60, date: "2026-02-09 14:22" },
    { ticker: "SOL", type: "BUY", price: 208.40, shares: 6.0, total: 1250.40, date: "2026-02-10 09:58" },
    { ticker: "SOL", type: "SELL", price: 206.20, shares: 2.0, total: 412.40, date: "2026-02-11 11:33" },
  ],
};

