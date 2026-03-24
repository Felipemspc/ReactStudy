import React, {useState} from "react";












function App() {
  const [contagem, setContagem ] = useState(0)
  function acrescentar(){
    setContagem(contagem + 1 )
  }

  function diminuir(){
    if(contagem <= 0){
      console.log('Você chegou no limite. tente somar.')
      return
    }
    setContagem(contagem - 1)
  }

  return  <div className="container">
    <h1>{contagem}</h1>
    <button onClick={acrescentar}>+</button>
    <button onClick={diminuir}>-</button>
    
  </div>;
}

export default App;
