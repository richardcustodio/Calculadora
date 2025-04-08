import React from "react";
import "./History.css";

function History({ history }) {
  return (
    <div className="history">
      <h2>Histórico</h2>
      {history.length === 0 ? (
        <p>Nenhum cálculo realizado ainda.</p>
      ) : (
        <ul>
          {history.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default History;
