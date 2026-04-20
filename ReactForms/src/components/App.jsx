import React, {useState} from "react";





function App() {
  
const [name, setName] = useState("")
const [nomeSalvo,setNomeSalvo] = useState("")

function handleChange(event){
  console.log(event.target.value)
  setName(event.target.value)
 
}  
function handleClick(event){
  setNomeSalvo(name)
  event.preventDefault();
}


  
  return (
    <div className="container">
      <h1>Hello {nomeSalvo} </h1>
      <form>
      <input onChange={handleChange} type="text" placeholder="What's your name?" value={name} />
      <button onClick={handleClick} >Submit</button>
      </form>
    </div>
  );
}

export default App;
