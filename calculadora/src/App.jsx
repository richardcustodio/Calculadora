import React, { useState, useContext } from "react";
import Display from "./components/Display";
import ButtonGroup from "./components/ButtonGroup";
import History from "./components/History";
import { ThemeContext } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle"; // Importe o ThemeToggle

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [memoryValue, setMemoryValue] = useState(null);
  const [history, setHistory] = useState([]);
  const { toggleTheme } = useContext(ThemeContext);

  const handleNumberClick = (number) => {
    setCurrentValue((prevValue) => {
      if (number === ".") {
        if (prevValue.includes(".")) {
          return prevValue;
        }
        return prevValue + ".";
      } else {
        return prevValue === "0" ? String(number) : prevValue + number;
      }
    });
  };

  const performOperation = () => {
    if (previousValue === null || operator === null) {
      return parseFloat(currentValue);
    }

    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    let result = 0;

    switch (operator) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        if (current === 0) {
          setCurrentValue("Erro");
          setPreviousValue(null);
          setOperator(null);
          return NaN;
        }
        result = prev / current;
        break;
      default:
        return current;
    }
    return result;
  };

  const handleOperatorClick = (op) => {
    if (currentValue === "0" && previousValue === null) return;

    if (previousValue !== null) {
      const result = performOperation();
      if (isNaN(result)) {
        setPreviousValue(null);
        setOperator(null);
        return;
      }
      setHistory((prevHistory) => [
        ...prevHistory,
        `${previousValue} ${operator} ${currentValue} = ${result}`,
      ]);
      setPreviousValue(String(result));
      setCurrentValue("0");
      setOperator(op);
    } else {
      setPreviousValue(currentValue);
      setCurrentValue("0");
      setOperator(op);
    }
  };

  const handlePercentClick = () => {
    const current = parseFloat(currentValue);
    if (previousValue !== null && operator !== null) {
      const prev = parseFloat(previousValue);
      let percentage = current / 100;
      let result;
      switch (operator) {
        case "+":
          result = prev + prev * percentage;
          break;
        case "-":
          result = prev - prev * percentage;
          break;
        case "*":
          result = prev * percentage;
          break;
        case "/":
          result = prev / percentage;
          break;
        default:
          result = percentage;
      }
      setCurrentValue(String(result));
    } else {
      setCurrentValue(String(current / 100));
    }
  };

  const handleToggleSignClick = () => {
    setCurrentValue((prevValue) => {
      if (prevValue === "0" || prevValue === "Erro") {
        return prevValue;
      }
      return String(parseFloat(prevValue) * -1);
    });
  };

  const handleMemoryClear = () => {
    setMemoryValue(null);
  };

  const handleMemoryRecall = () => {
    if (memoryValue !== null) {
      setCurrentValue(String(memoryValue));
    }
  };

  const handleMemoryAdd = () => {
    const current = parseFloat(currentValue);
    setMemoryValue((prevMemory) =>
      prevMemory === null ? current : prevMemory + current
    );
  };

  const handleMemorySubtract = () => {
    const current = parseFloat(currentValue);
    setMemoryValue((prevMemory) =>
      prevMemory === null ? -current : prevMemory - current
    );
  };

  const handleMemoryStore = () => {
    setMemoryValue(parseFloat(currentValue));
  };

  const handleSquareRoot = () => {
    const current = parseFloat(currentValue);
    if (current < 0) {
      setCurrentValue("Erro");
    } else {
      setCurrentValue(String(Math.sqrt(current)));
    }
  };

  const handleSquare = () => {
    const current = parseFloat(currentValue);
    setCurrentValue(String(Math.pow(current, 2)));
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(currentValue);
    console.log("Valor copiado para a área de transferência:", currentValue);
  };

  const handleEqualClick = () => {
    if (previousValue === null || operator === null) return;
    const result = performOperation();
    setHistory((prevHistory) => [
      ...prevHistory,
      `${previousValue} ${operator} ${currentValue} = ${result}`,
    ]);
    setCurrentValue(String(result));
    setPreviousValue(null);
    setOperator(null);
  };

  const handleClearClick = () => {
    setCurrentValue("0");
    setPreviousValue(null);
    setOperator(null);
  };

  const handleButtonClick = (value) => {
    if (/\d/.test(value) || value === ".") {
      handleNumberClick(value);
    } else if (["+", "-", "*", "/"].includes(value)) {
      handleOperatorClick(value);
    } else if (value === "%") {
      handlePercentClick();
    } else if (value === "+/-") {
      handleToggleSignClick();
    } else if (value === "=") {
      handleEqualClick();
    } else if (value === "AC") {
      handleClearClick();
    } else if (value === "MC") {
      handleMemoryClear();
    } else if (value === "MR") {
      handleMemoryRecall();
    } else if (value === "M+") {
      handleMemoryAdd();
    } else if (value === "M-") {
      handleMemorySubtract();
    } else if (value === "√") {
      handleSquareRoot();
    } else if (value === "x²") {
      handleSquare();
    } else if (value === "Copy") {
      handleCopyToClipboard();
    }
  };

  return (
    <div className="calculator-container">
      {" "}
      {/* Envolva a calculadora para posicionamento relativo */}
      <ThemeToggle /> {/* Renderize o componente ThemeToggle */}
      <div className="calculator">
        <Display value={currentValue} />
        <ButtonGroup onButtonClick={handleButtonClick} />
        <History history={history} />
      </div>
    </div>
  );
}

export default App;
