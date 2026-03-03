import React from "react";
import Login from "./Login"


let isLoggedIn = false;

let currentTime = new Date(2026, 11 , 2, 11).getHours()
console.log(currentTime)

function App() {
  return (
    <div className="container">{
        //TERNARY
      isLoggedIn ? <h1>Hello MuthaFUckas</h1> : <Login /> 
        //&& OPERATOR
       //currentTime > 12 && <h1>Why Are you Still Working!?</h1>
    
     } </div>
  );
}

export default App;
