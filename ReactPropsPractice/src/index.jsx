import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App";

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<App />);


//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
