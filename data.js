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
    instagram: "https://www.instagram.com/midlifeonsol/",
    x: "https://x.com/midlifeonsol",
    youtube: "https://www.youtube.com/@midlifeonsol",
    tiktok: "https://www.tiktok.com/@midlifeonsol",
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

  // Daily snapshot of progress
  dailyStats: [
    { date: "2026-02-16", balance: 3000, pnl: 0 },
    { date: "2026-02-17", balance: 3019.00, pnl: 19.05 },
  ],

  // Ledger of specific moves
  transactions: [
    {
      ticker: "TSLA",
      type: "BUY",
      shares: 7.3431,
      price: 408.54,
      total: 2999.95,
      date: "2026-02-17 09:32 AM",
    },
    {
      ticker: "TSLA",
      type: "SELL",
      shares: 7.3431,
      price: 411.1338,
      total: 3019.00,
      date: "2026-02-17 09:36 AM",
    },
  ],
};
