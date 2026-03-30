import React, {useState} from "react";






function App() {

  const agora = new Date().toLocaleTimeString();
  const [novoHorario, setNovoHorario] = useState(agora)

  function updateTime(){
    const horarioAtualizado = new Date().toLocaleTimeString();
    setNovoHorario(horarioAtualizado);
  }
  setInterval(updateTime,1000)

  return (
    <div className="container">
      <h1>{novoHorario}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
