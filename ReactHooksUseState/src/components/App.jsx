
import React ,{ useState } from "react";


function App() {

  const [count, setCount] = useState (0);

  function acrescentar(){
    setCount(count + 1 );
  }

  function diminuir(){
    if(count === 0){
      console.log('Nível Mínimo Permitido.')
      alert('Nível Minimo Atingido!')
      return;
    }
      setCount(count -1)
    
  }



  return <div>
   <div className="container">
     <h1>{count}</h1>
     <button onClick={acrescentar}>+</button>
     <button onClick={diminuir}>-</button>
   </div>
  </div>
}

export default App;
