import React from 'react'
import './App.css'



function strike (){
    
    document.getElementById("texto").style.textDecoration = "line-through"

}

function unstrike(){
  document.getElementById('texto').style.textDecoration = null;
}


function App() {

  return <div>
     <h1 id='texto'>Hello</h1>
  <button id='botao' onClick={strike}>Press to change</button>
  <button id='botao' onClick={unstrike}>Press to change</button>
 </div>
}

export default App
