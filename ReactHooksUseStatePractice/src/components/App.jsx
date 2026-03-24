import React, {useState} from "react";






function App() {
  let [horario,setHorario] = useState(new Date().toLocaleTimeString())
  function obterHorario(){
    setHorario(new Date().toLocaleTimeString())
  }
  setInterval(obterHorario,1000)

  return (
    <div className="container">
      <h1>{horario}</h1>
      <button onClick={obterHorario}>Get Time</button>
    </div>
  );
}

export default App;
