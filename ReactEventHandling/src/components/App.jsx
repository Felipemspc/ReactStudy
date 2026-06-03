import React , {useState} from "react";




function App() {

const [headingText, setHeadingText] = useState("Hello")
const [isMouseOver, setMouseOver] = useState(false)
function handleMouseOver(){
  
  setMouseOver(true)
}

function handleMouseLeave(){
  setMouseOver(false)
}
function handleClick(){
  setHeadingText("Submitted!")
  
}

 
  
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClick} onMouseOver={handleMouseOver} style={{backgroundColor: isMouseOver? "black" : "white"}} onMouseLeave={handleMouseLeave}>Submit</button>
    </div>
  );
}

export default App;
