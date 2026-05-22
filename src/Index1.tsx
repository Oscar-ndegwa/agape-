import React, { useEffect, useState } from "react";
import { squares } from "./lib/board-data";

const styles = `
  body.career-ladder-body { font-family: "Arial", sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); margin: 0; padding: 10px; min-height: 100vh; box-sizing: border-box; }
  .game-container { max-width: 1200px; margin: 0 auto; background: white; border-radius: 20px; padding: 15px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
  .game-board { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin: 20px 0; }
  .square { border: 3px solid #bdc3c7; border-radius: 15px; padding: 15px 10px; cursor: pointer; background: #f8f9fa; text-align: center; font-size: 0.9em; transition: transform 0.2s; }
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

export default function Index() {
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
