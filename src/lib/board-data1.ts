export type SquareType = "header" | "bronze" | "silver" | "gold" | "milestone";

export interface Square {
  type: SquareType;
  number?: string | number;
  title: string;
  desc: string;
  criteria?: string[];
}

export const squares: Square[] = [
  { type: "header", title: "Level 1: Foundation Building (Months 1-3)", desc: "Building Your Caregiving Foundation" },
  { type: "bronze", number: 1, title: "Welcome Survey", desc: "Complete post-hiring survey within 7 days", criteria: ["Complete post-hiring onboarding survey within 7 days of start date", "Schedule and attend career development meeting with Care Coordinator within 14 days"] },
  { type: "bronze", number: 2, title: "Career Planning", desc: "Meet with Care Coordinator & create development plan", criteria: ["Schedule and attend career development meeting with Care Coordinator within 14 days", "Complete career development plan template during first month"] },
  { type: "bronze", number: 3, title: "Perfect Timing", desc: "Clock in/out perfectly for 10 shifts", criteria: ["Clock in and out perfectly for 10 consecutive shifts without errors"] },
  { type: "bronze", number: 4, title: "Safety First", desc: "Complete Basic Caregiver Safety training", criteria: ['Complete "Basic Caregiver Safety" training course', "Pass safety assessment with 90% or higher"] },
  { type: "bronze", number: 5, title: "Foundation Complete", desc: "Bronze level achieved!", criteria: ["Complete all Bronze Level requirements", "Demonstrate readiness for Silver level"] },
  { type: "silver", number: 6, title: "Flexible Helper", desc: "Accept 3 short shifts (<4 hours)", criteria: ["Accept 3 shifts that are less than 4 hours in duration"] },
  { type: "silver", number: 7, title: "Distance Warrior", desc: "Accept 2 shifts >15 miles away", criteria: ["Accept 2 shifts that are more than 15 miles from your home address"] },
  { type: "silver", number: 8, title: "Dementia Expert", desc: "Complete Dementia Care training", criteria: ['Complete "Dementia Care Fundamentals" training course'] },
  { type: "silver", number: 9, title: "Goal Setter", desc: "Set 30-day review goals", criteria: ["Set and document goals for your 30-day review meeting"] },
  { type: "silver", number: 10, title: "Silver Star", desc: "Silver level complete!", criteria: ["Complete 3-week Caregiver satisfaction survey", "All Silver requirements met"] },
  { type: "gold", number: 11, title: "Triple Threat", desc: "Accept 3 shifts in one day", criteria: ["Accept one full day with three shifts scheduled"] },
  { type: "gold", number: 12, title: "Same-Day Hero", desc: "Accept 5 same-day shifts", criteria: ["Accept 5 same-day shift assignments"] },
  { type: "gold", number: 13, title: "Social Champion", desc: "Give Facebook review", criteria: ["Give Agape a positive review on Facebook"] },
  { type: "gold", number: 14, title: "Med Safety Pro", desc: "Complete Medication Management training", criteria: ['Complete "Medication Management Basics" training course'] },
  { type: "gold", number: 15, title: "Gold Standard", desc: "Set 60-day goals", criteria: ["Set and document goals for your 60-day review meeting"] },
  { type: "milestone", number: "🏆", title: "FIRST RAISE!", desc: "$1.00/hour increase + Foundation Badge", criteria: ["Congratulations! You have earned a $1.00/hour raise effective immediately"] }
];
