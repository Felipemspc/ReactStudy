import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";
function App() {
  return (
    
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar 
        img ="https://imgs.search.brave.com/YsPeUxrstxsJFbuds4IaV3qDZ9X0zlUb6w3sifI3-fA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYXN0/Zm9vZGUuZmlsZXMu/d29yZHByZXNzLmNv/bS8yMDEzLzAzL2Zl/bGlwZS1tYXR0b3Mt/YnktdGhpYWdvLXNh/bnRvcy0wNy5qcGc_/dz01OTA"
      />
      <Card
      name = {contacts[0].name}
      img = {contacts[0].imgURL}
      phone ={contacts[0].phone}
      email = {contacts[0].email}
      />
      <Card
      name = {contacts[1].name}
      img = {contacts[1].imgURL}
      phone ={contacts[1].phone}
      email = {contacts[1].email}
      />
      <Card
      name = {contacts[2].name}
      img = {contacts[2].imgURL}
      phone ={contacts[2].phone}
      email = {contacts[2].email}
      />
    </div>
  );
}

export default App;
