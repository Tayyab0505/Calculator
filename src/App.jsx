import { useState } from 'react';
import './App.css';

function App() {
  const [value, setvalue] = useState('');

  const click = (e) => {
    setvalue(value + e.target.value);
  };

  const clearScreen = () => {
    setvalue('');
  }

  const calculate = () => {
    try {
      setvalue(eval(value));
    } catch (error) {
      alert('Invalid expression', error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="calculator">
          <form action="">
            <div className="screen">
              <input type="text" value={value} readOnly />
            </div>

            <div className="row">
              <button type="button" onClick={clearScreen}>C</button>
              <button type="button" onClick={click} value={"+-"}>+-</button>
              <button type="button" onClick={click} value={"%"}>%</button>
              <button type="button" onClick={click} value={"/"}>/</button>
            </div>

            <div className="row">
              <button type="button" onClick={click} value={7}>7</button>
              <button type="button" onClick={click} value={8}>8</button>
              <button type="button" onClick={click} value={9}>9</button>
              <button type="button" onClick={click} value={"*"}>x</button>
            </div>

            <div className="row">
              <button type="button" onClick={click} value={4}>4</button>
              <button type="button" onClick={click} value={5}>5</button>
              <button type="button" onClick={click} value={6}>6</button>
              <button type="button" onClick={click} value={"-"}>-</button>
            </div>

            <div className="row">
              <button type="button" onClick={click} value={1}>1</button>
              <button type="button" onClick={click} value={2}>2</button>
              <button type="button" onClick={click} value={3}>3</button>
              <button type="button" onClick={click} value={"+"}>+</button>
            </div>

            <div className="row">
              <button type="button" onClick={click} value={0}>0</button>
              <button type="button" onClick={click} value={"."}>.</button>
              <button className="equal" type="button" onClick={calculate}>=</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;