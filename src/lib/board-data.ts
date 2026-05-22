export type SquareType = "header" | "bronze" | "silver" | "gold" | "milestone";
export interface Square { type: SquareType; number?: string | number; title: string; desc: string; criteria?: string[]; }
export const squares: Square[] = [
  { type: "header", title: "Level 1: Foundation Building" },
  { type: "bronze", number: 1, title: "Welcome Survey", desc: "Complete survey" },
  { type: "silver", number: 6, title: "Flexible Helper", desc: "Accept short shifts" },
  { type: "gold", number: 11, title: "Triple Threat", desc: "3 shifts in a day" },
  { type: "milestone", number: "🏆", title: "FIRST RAISE!", desc: "$1.00 raise" }
];
