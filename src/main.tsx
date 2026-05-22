import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"

// 1. DATA REPOSITORY (Moved directly inside main)
export type SquareType = "header" | "bronze" | "silver" | "gold" | "milestone";
export interface Square {
  type: SquareType;
  number?: string | number;
  title: string;
  desc: string;
  criteria?: string[];
}

const squares: Square[] = [
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

// 2. STYLES SHEET
const styles = `
  body.career-ladder-body { font-family: "Arial", sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); margin: 0; padding: 10px; min-height: 100vh; box-sizing: border-box; }
  .game-container { max-width: 1200px; margin: 0 auto; background: white; border-radius: 20px; padding: 15px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
  .game-board { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0; }
  .square { border: 3px solid #bdc3c7; border-radius: 15px; padding: 15px 10px; cursor: pointer; background: #f8f9fa; text-align: center; font-size: 0.9em; transition: transform 0.2s; color: #333; }
  .square:hover { transform: translateY(-3px); }
  .bronze { background: linear-gradient(135deg, #cd7f32 0%, #a0522d 100%); color: white; }
  .silver { background: linear-gradient(135deg, #c0c0c0 0%, #808080 100%); color: white; }
  .gold { background: linear-gradient(135deg, #ffd700 0%, #ffb347 100%); color: #2c3e50; }
  .milestone { background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%); color: white; font-weight: bold; }
  .level-header { grid-column: 1 / -1; background: linear-gradient(135deg, #3498db 0%, #2980b9 100%); color: white; padding: 15px; text-align: center; border-radius: 15px; font-weight: bold; font-size: 1.2em; }
  .cl-modal { position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; padding: 20px; }
  .modal-content { background: white; padding: 25px; border-radius: 15px; max-width: 500px; width: 100%; color: #2c3e50; position: relative; }
  .cl-close { position: absolute; right: 15px; top: 10px; font-size: 24px; cursor: pointer; color: #aaa; }
  .cl-close:hover { color: black; }
  .criteria-list { text-align: left; padding-left: 20px; margin-top: 15px; }
  .criteria-list li { margin-bottom: 8px; font-size: 0.9em; }
`;

// 3. INTERACTIVE INTERFACE COMPONENT
function Index() {
  const [active, setActive] = useState<any>(null);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="game-container">
        <header style={{ textAlign: "center", marginBottom: "20px" }}>
          <h1 style={{ color: "#2c3e50" }}>🏠 Agape Career Ladder Journey</h1>
          <p style={{ color: "#7f8c8d" }}>Click any step to view completion milestones and criteria</p>
        </header>
        
        <div className="game-board">
          {squares.map((sq, i) => sq.type === "header" ? (
            <div className="level-header" key={i}>
              {sq.title}
              <div style={{ fontSize: "0.7em", fontWeight: "normal", opacity: 0.9 }}>{sq.desc}</div>
            </div>
          ) : (
            <div className={`square ${sq.type}`} key={i} onClick={() => setActive(sq)}>
              <div style={{ fontWeight: "bold", fontSize: "1.2em", marginBottom: "4px" }}>{sq.number}</div>
              <div>{sq.title}</div>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div className="cl-modal" onClick={(e) => { if (e.target === e.currentTarget) setActive(null); }}>
          <div className="modal-content">
            <span className="cl-close" onClick={() => setActive(null)}>×</span>
            <h2 style={{ marginTop: 0, color: "#2c3e50" }}>{active.title}</h2>
            <p style={{ color: "#555", lineHeight: 1.4 }}>{active.desc}</p>
            {active.criteria && (
              <>
                <h4 style={{ marginBottom: "5px" }}>Requirements:</h4>
                <ul className="criteria-list">
                  {active.criteria.map((c: string, idx: number) => <li key={idx}>✓ {c}</li>)}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// 4. RENDERING ENGINE
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
)
