import React, {useState} from "react";






function App() {

const [guest,setGuest] = useState("")
const [headingText, setText] = useState("")

function handleChange(){
  
  setGuest(event.target.value)
}

function handleClick(){
  setText(guest) 
}

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <input type="text" placeholder="What's your name?" onChange={handleChange} value={guest}/>
      <button onClick={handleClick}>Submit</button> 
    </div>
  );
}

export default App;
