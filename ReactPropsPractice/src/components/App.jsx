import React from "react";
import Cards from "./Cards";
import contacts from "../contacts";

function App() {
  return (
console.log(contacts),

    <div>
      <h1 className="heading">My Contacts</h1>  
      <Cards 
      name = {contacts[0].name}
      imgURL = {contacts[0].imgURL} 
      cellphone = {contacts[0].phone}
      email = {contacts[0].email} 
      />
      <Cards 
      name = {contacts[1].name}
      imgURL = {contacts[1].imgURL} 
      cellphone = {contacts[1].phone}
      email = {contacts[1].email} 
      />
      <Cards 
      name = {contacts[2].name}
      imgURL = {contacts[2].imgURL} 
      cellphone = {contacts[2].phone}
      email = {contacts[2].email} 
      />
     
    </div>
  
  );
}

export default App;
