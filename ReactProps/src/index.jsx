import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.mail}</p>
    </div>
  );
}

root.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+8613922248505"
      mail="b@beyonce.gmail.com"
    />
    <Card
      name="Felipe"
      img="https://fastfoode.wordpress.com/wp-content/uploads/2013/04/felipe-mattos-by-ronald-luv-02.jpg"
      tel="+5581995597577"
      mail="mspcfelipe@gmail.com"
    />
  </div>
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
