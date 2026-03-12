import React from "react";
import Form from "./Form";

const userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form 
      usuarioLogado = {userIsRegistered}
      />
    </div>
  );
}

export default App;
