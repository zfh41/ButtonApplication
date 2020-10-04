import React, { useState } from "react";
import "./styles.css";

addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});

export default function App() {
  //
  var [myInput, changeInput] = useState("lol");

  function message() {
    changeInput(document.getElementById("fname").value);
    var holder = document.getElementById("holder");
    // have this function to read a value and display
    holder.innerHTML +=
      "<li>" + document.getElementById("fname").value + "</li><br>";

    document.getElementById("fname").value = "";
  }

  return (
    <html>
      <body>
        <p>Please Input a String: </p>
        <input type="text" id="fname" name="fname"></input>
        <br />

        <button id="myBtn" onClick={message}>
          +
        </button>

        <div id="holder"></div>
      </body>
    </html>
  );
}
