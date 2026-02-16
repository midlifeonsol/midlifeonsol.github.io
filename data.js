// Single source of truth for the dashboard UI.
// Edit values here and refresh the page to see updates.

export const tradingData = {
  // Required fields
  currentDay: 0,
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

  // Required fields (challenge starts tomorrow — day 0, no trades yet)
  dailyStats: [
    { date: "2025-02-17", balance: 3000, pnl: 0 },
  ],

  transactions: [],
};

