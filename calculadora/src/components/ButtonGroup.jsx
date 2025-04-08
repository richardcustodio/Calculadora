import React from "react";
import Button from "./Button";
import "./ButtonGroup.css";

function ButtonGroup({ onButtonClick }) {
  const buttons = [
    "MC",
    "MR",
    "M+",
    "M-",
    "MS",
    "Copy", // Removido 'Theme'
    "AC",
    "√",
    "x²",
    "/",
    "*",
    "-",
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "=",
    "1",
    "2",
    "3",
    ".",
    "+/-",
    "0",
    "%",
  ];

  return (
    <div className="button-grid">
      {buttons.map((button) => (
        <Button
          key={button}
          text={button}
          onClick={() => onButtonClick(button)}
          className={
            ["MC", "MR", "M+", "M-", "MS"].includes(button)
              ? "memory"
              : button === "Copy"
              ? "copy"
              : // Removida a condição para 'theme-toggle'
              ["√", "x²", "/", "*", "-", "+", "="].includes(button)
              ? "operator"
              : button === "AC"
              ? "clear"
              : ""
          }
        />
      ))}
    </div>
  );
}

export default ButtonGroup;
