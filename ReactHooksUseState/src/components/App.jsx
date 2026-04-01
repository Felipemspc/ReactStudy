import React, { useState } from "react";

function App() {
  const [contagem, setContagem] = useState(0);

  function acrescentar() {
    setContagem((prev) => prev + 1);
  }

  function diminuir() {
    if (contagem <= 0) {
      console.log("Limite atingido.");
      return;
    }
    setContagem((prev) => prev - 1);
  }

  return (
    <div className="container">
      <span className="label">System Counter v1.0</span>
      <h1>{contagem}</h1>
      <div className="controls">
        <button className="minus" onClick={diminuir}>
          -
        </button>
        <button className="plus" onClick={acrescentar}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
