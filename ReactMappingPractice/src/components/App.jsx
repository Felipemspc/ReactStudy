import React from "react";
import Term from "./Term";
import emojipedia from "../emojipedia";


function Catalogo(emojipedia){
  return <Term 
        key = {emojipedia.id}
        emoji = {emojipedia.emoji}
        name = {emojipedia.name}
        meaning = {emojipedia.meaning}
  />
};


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

        {emojipedia.map(Catalogo)}

       
      </dl>
    </div>
  );
}

export default App;
