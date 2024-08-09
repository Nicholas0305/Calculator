import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import CalculatorInput from "./CalculatorInput";
function MainPage() {
  return (
    <div>
      <NavBar />
      <div>
        <h1>
          Welcome to the Everything Calculator, use the regular calc or go for
          an equation
        </h1>
      </div>
      <div id="calculator-input-container">
        <CalculatorInput />
      </div>
    </div>
  );
}
export default MainPage;
