import React from "react";
import ReactDOM from "react-dom";

const fname = "Umar Farooque";
const lname = "Shaikh";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p>My lucky number is {num}</p>
    <p>your lucky number is {3 + 9}</p>
    <p>My lucky number is {Math.floor(Math.random() * 10)}</p>

    {/* this is template literals */}
    <h1>Hello {`${fname} ${lname} `}this is template literals</h1>
  </div>,
  document.getElementById("root")
);
