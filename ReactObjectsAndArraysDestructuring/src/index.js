//CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom/client";
import cars from "./practice";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Destructuring the array to get the 2 cars OBJECTS

const [hondaA, teslaA] = cars;

console.log(teslaA);
console.log(hondaA);

let tesla = {
    model:teslaA.model,
    TopColour:teslaA.coloursByPopularity[0],
    TopSpeed:teslaA.speedStats.topSpeed
} 
let honda ={
    model:hondaA.model,
    TopColour:hondaA.coloursByPopularity[0],
    TopSpeed:hondaA.speedStats.topSpeed

}


//Destructuring the Tesla object to extract specific properties into rename constants

//const {
//  model: teslaModel,
//  coloursByPopularity: [teslaTopColour],
//  speedStats: { topSpeed: teslaTopSpeed },
//} = teslaA;
//
//console.log(teslaA)
//
////Destructuring the Honda object to extract specific properties into rename constants
//
//const {
//  model: hondaModel,
//  coloursByPopularity: [hondaTopColour],
//  speedStats: { topSpeed: hondaTopSpeed },
//} = hondaA;
//
//console.log(hondaA)

// Now i can set new variables to each car with the names that is required on the table.
// Setting new Variables to TESLA

//let tesla = {
//    model:teslaModel,
//    TopSpeed:teslaTopSpeed,
//    TopColour:teslaTopColour
//};
// Setting new Variables to HONDA

//let honda = {
//    model:hondaModel,
//    TopSpeed:hondaTopSpeed,
//    TopColour:hondaTopColour
//};


root.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{tesla.TopSpeed}</td>
      <td>{tesla.TopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{honda.TopSpeed}</td>
      <td>{honda.TopColour}</td>
    </tr>
  </table>,
);
