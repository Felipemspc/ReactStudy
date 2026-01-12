import React from "react";
import Card from "../Card"
import contacts from "../contacts"


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card 
      nome = {contacts[0].name}
      img ={contacts[0].imgURL}
      telefone = {contacts[0].phone}
      correioEletronico = {contacts[0].email} 
      />
       <Card 
      nome = {contacts[1].name}
      img ={contacts[1].imgURL}
      telefone = {contacts[1].phone}
      correioEletronico = {contacts[1].email} 
      />
       <Card 
      nome = {contacts[2].name}
      img ={contacts[2].imgURL}
      telefone = {contacts[2].phone}
      correioEletronico = {contacts[2].email} 
      />
       <Card 
      nome = {contacts[3].name}
      img ={contacts[3].imgURL}
      telefone = {contacts[3].phone}
      correioEletronico = {contacts[3].email} 
      />
     

    </div>
  );
}

export default App;
