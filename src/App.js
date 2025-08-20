import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const handleNumber = (number) => {
    if (shouldResetDisplay) {
      setDisplay(number);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display === '0' ? number : display + number);
    }
  };

  const handleOperator = (operator) => {
    if (shouldResetDisplay) {
      setShouldResetDisplay(false);
    }
    
    if (equation && !shouldResetDisplay) {
      try {
        const result = eval(equation + display);
        setEquation(result + operator);
        setDisplay(result.toString());
      } catch (error) {
        setDisplay('Error');
        setEquation('');
        setShouldResetDisplay(true);
        return;
      }
    } else {
      setEquation(display + operator);
    }
    setShouldResetDisplay(true);
  };

  const handleEquals = () => {
    if (equation && !shouldResetDisplay) {
      try {
        const result = eval(equation + display);
        setDisplay(result.toString());
        setEquation('');
        setShouldResetDisplay(true);
      } catch (error) {
        setDisplay('Error');
        setEquation('');
        setShouldResetDisplay(true);
      }
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setShouldResetDisplay(false);
  };

  const handleDelete = () => {
    if (display.length === 1) {
      setDisplay('0');
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  const handleDecimal = () => {
    if (shouldResetDisplay) {
      setDisplay('0.');
      setShouldResetDisplay(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <div className="equation">{equation}</div>
          <div className="current">{display}</div>
        </div>
        <div className="buttons">
          <button className="operator clear" onClick={handleClear}>
            C
          </button>
          <button className="operator" onClick={handleDelete}>
            DEL
          </button>
          <button className="operator" onClick={() => handleOperator('/')}>
            ÷
          </button>
          
          <button onClick={() => handleNumber('7')}>7</button>
          <button onClick={() => handleNumber('8')}>8</button>
          <button onClick={() => handleNumber('9')}>9</button>
          <button className="operator" onClick={() => handleOperator('*')}>
            ×
          </button>
          
          <button onClick={() => handleNumber('4')}>4</button>
          <button onClick={() => handleNumber('5')}>5</button>
          <button onClick={() => handleNumber('6')}>6</button>
          <button className="operator" onClick={() => handleOperator('-')}>
            −
          </button>
          
          <button onClick={() => handleNumber('1')}>1</button>
          <button onClick={() => handleNumber('2')}>2</button>
          <button onClick={() => handleNumber('3')}>3</button>
          <button className="operator" onClick={() => handleOperator('+')}>
            +
          </button>
          
          <button className="zero" onClick={() => handleNumber('0')}>0</button>
          <button onClick={handleDecimal}>.</button>
          <button className="equals" onClick={handleEquals}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App; 