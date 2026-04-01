// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom/client";
import animals from "./data";
import cars from "./practice";

//console.log(animals)

//const [cat,dog] = animals;

//console.log(cat)
//console.log(dog)

//const {name, sound} = dog
//console.log(sound)

//  OR
//I CAN SIMPLY SET THE VARIABLES WITH THE NAMES THAT I WANT FOR EXample:

//const {name: catName, sound: catSound} = cat
//console.log(catSound)

// i can also give a default value for example(caso a variavel que esta em data.js nao possua o nome do animal)
// esse será o novo valor atribuído :

//const {name = "Pe de Pano", sound = "Auuuuuuuuu"} = dog
//console.log(name)

//and if we have an object inside a object, we can do like this:

//const {name, sound, feedingRequirements:{food,water} } = cat

//console.log("Quantidade de vezes de agua por dia: " + water)

const root = ReactDOM.createRoot(document.getElementById("root"));

//Destructuring cars Array
var [honda, tesla] = cars;

console.log(tesla);
console.log(honda);


//Destructuring Tesla Info

const {
  model: teslaModel,
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;
console.log(teslaModel);
console.log(teslaTopColour);
console.log(teslaTopSpeed);

tesla = {
  model: teslaModel,
  TopSpeed: teslaTopSpeed,
  TopColour: teslaTopColour
}


//Destructuring Hond Info
const {
  model: hondaModel,
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

console.log(hondaModel);
console.log(hondaTopColour);
console.log(hondaTopSpeed);


honda = {
  model: hondaModel,
  TopSpeed: hondaTopSpeed,
  TopColour: hondaTopColour
}

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
