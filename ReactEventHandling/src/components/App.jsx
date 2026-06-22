import React, { useState } from "react";

function App() {
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
   
  }

  function handleMouseOut(){
    setMouseOver(false)
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{backgroundColor: isMouseOver? "black" : "white"}}>Submit</button>
    </div>
  );
}

export default App;
