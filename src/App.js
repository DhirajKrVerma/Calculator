import "./App.css";
import Header from "./Header/Header";
import KeyPad from "./KeyPad/KeyPad";
import { number, operator, useKeyCode } from "./KeyPad/KeyData";
import { useState } from "react";
function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleKeyDown = (keyCode, key) => {
    if (!keyCode) return;
    if (useKeyCode.includes(key)) return;
    if (number.includes(key)) {
      if (key === "0") {
        if (expression.length === 0) return;
      }
      setExpression(expression + key);
    } else if (operator.includes(key)) {
      if (!expression) return;
      const lastChar = expression.slice(-1);
      if (operator.includes(lastChar)) {
        return  setExpression(expression.replace(lastChar, key));
      }
      if (lastChar === ".") return;
      setExpression(expression + key);
    } else if (key === ".") {
      if (!expression) return;
      const lastChar = expression.slice(-1);
      if (!number.includes(lastChar)) return;
      setExpression(expression + key);
    } else if (keyCode === 8) {
      if (!expression) return;
      calculationFun(expression.slice(0, -1));
      setExpression(expression.slice(0, -1));
      setResult("");
    } else if (keyCode === 13) {
      if (!expression) return;
      calculationFun(expression);
    }
  };

  const calculationFun = (exp) => {
    if (!exp) return;
    const lastChar = expression.slice(-1);
    if (!number.includes(lastChar)) exp = exp.slice(0, -1);
    setResult(eval(exp));
  };

  return (
    <>
      <div
        tabIndex="0"
        onKeyDown={(event) => handleKeyDown(event.keyCode, event.key)}
        className="relative w-96 h-40 bg-blue-400 content-center ml-64 mt-10 rounded-t-lg text-right pr-5"
      >
        <div
          className="absolute top-0 m-4 bg-black p-1 text-white px-2 rounded-xl"
          onClick={() => {
            setResult("");
            setExpression("");
          }}
        >
          Clear
        </div>
        <Header expression={expression} result={result} />
      </div>
      <div className="w-96 h-96 bg-blue-800 content-center ml-64 rounded-b-lg">
        <KeyPad handleKeyDown={handleKeyDown} />
      </div>
    </>
  );
}

export default App;
