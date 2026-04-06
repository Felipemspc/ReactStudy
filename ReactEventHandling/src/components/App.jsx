import React , {useState} from "react";














function App() {

const [headingText, setHeadingText] = useState("Click To submitt!")
const [isMouseOver , setMouseOver] = useState(false)
function changeHeadingText(){
  console.log("Clicked")
  setHeadingText("Submitted!")
}

function handleMouseOver(){
  console.log("O mouse está sobre o botão!")
  setMouseOver(true)
}

function handleMouseOut(){
  console.log("O mouse saiu do botão!")
  setMouseOver(false)
}

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={changeHeadingText} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{backgroundColor: isMouseOver ? "black" : "pink"}}>Submit</button>
    </div>
  );
}

export default App;
