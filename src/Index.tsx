import { useEffect, useState } from "react";
import { squares, type Square } from "./lib/board-data";

const styles = `
  body.career-ladder-body { font-family: "Arial", sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); margin: 0; padding: 10px; min-height: 100vh; box-sizing: border-box; }
  .game-container { max-width: 1200px; margin: 0 auto; background: white; border-radius: 20px; padding: 15px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
  .game-board { display: grid; grid-template-columns: repeat(6, 1fr); gap: 15px; margin: 20px 0; }
  .square { border: 3px solid #bdc3c7; border-radius: 15px; padding: 12px 8px; cursor: pointer; background: #f8f9fa; text-align: center; }
  .bronze { background: linear-gradient(135deg, #cd7f32 0%, #a0522d 100%); color: white; }
  .silver { background: linear-gradient(135deg, #c0c0c0 0%, #808080 100%); color: white; }
  .gold { background: linear-gradient(135deg, #ffd700 0%, #ffb347 100%); color: #2c3e50; }
  .milestone { background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%); color: white; }
  .level-header { grid-column: 1 / -1; background: #3498db; color: white; padding: 15px; text-align: center; border-radius: 15px; }
`;

export default function Index() {
  const [active, setActive] = useState(null);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="game-container">
        <header><h1>🏠 Agape Career Ladder Journey</h1></header>
        <div className="game-board">
          {squares.map((sq, i) => sq.type === "header" ? (
            <div className="level-header" key={i}>{sq.title}</div>
          ) : (
            <div className={`square ${sq.type}`} key={i} onClick={() => setActive(sq)}>
              <div>{sq.number}</div><strong>{sq.title}</strong>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
