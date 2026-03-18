import React from 'react'
import './App.css'


function toggleStrike(){
  const texto = document.getElementById('text');
  if(texto.style.textDecoration === 'line-through'){
    texto.style.textDecoration = null
  }else{
    texto.style.textDecoration='line-through'
  }
}



/*function strikeThrough (){
  return document.getElementById("text").style.textDecoration = "line-through"
}

function unstrike(){
  return document.getElementById('text').style.textDecoration = null}

*/
function App() {

  return <div>
    <h1 id='text'>Hi There, </h1>
    <p>MuthaFuckas!</p>
    <button onClick={toggleStrike}>Strike / Unstrike Through</button>

   </div>
}

export default App
