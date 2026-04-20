import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseover, setMouseOver] = useState(false);
  const [isMouseDown, setMouseDown] = useState(false);
  function handleOnClick() {
    console.log("Clicando em submit!");
    setHeadingText("Submitted");
  }
  function handleMouseOver() {
    console.log("Cursor em cima do botao submit");
    setMouseOver(true);
  }
  function handleMouseOut() {
    console.log("Mouse saindo da botão submit");
    setMouseOver(false);
  }
  function handleMouseDown(){
    console.log("Mouse  foi clicado")
    setMouseDown(true)

  }
  function handleMouseUp(){
    setMouseDown(false)
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleOnClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        
        style={{
          backgroundColor: isMouseover ? "black" : "white",
          color: isMouseover ? "white" : "black",
          boxShadow: isMouseDown ? "10px 10px 10px red" : "none",transition:"box-shadow 0.2 ease-in-out",
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
