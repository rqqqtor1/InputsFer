import { useState } from 'react';
import './App.css';
import InputComponent from './complements/InputComponent';





const ResultComponent = ({ result }) => {
  return (
    <div className="result-container">
      <h2>Resultado: {result}</h2>
    </div>
  );
};


const AddButton = ({ onClick }) => {
  return (
    <button onClick={() => onClick('add')}>Sumar</button>
  );
};


const SubtractButton = ({ onClick }) => {
  return (
    <button onClick={() => onClick('subtract')}>Restar</button>
  );
};

// Componente para la multiplicación
const MultiplyButton = ({ onClick }) => {
  return (
    <button onClick={() => onClick('multiply')}>Multiplicar</button>
  );
};

// Componente para la división
const DivideButton = ({ onClick }) => {
  return (
    <button onClick={() => onClick('divide')}>Dividir</button>
  );
};

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);

  // Función para realizar el cálculo
  const handleCalculation = (operation) => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Por favor ingrese valores válidos");
      return;
    }

    let calculationResult;
    switch (operation) {
      case 'add':
        calculationResult = num1 + num2;
        break;
      case 'subtract':
        calculationResult = num1 - num2;
        break;
      case 'multiply':
        calculationResult = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          calculationResult = "No se puede dividir por 0";
        } else {
          calculationResult = num1 / num2;
        }
        break;
      default:
        calculationResult = "Operación no válida";
    }
    setResult(calculationResult);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Calculadora de Resultados</h1>
        
        {/* Inputs */}
        <InputComponent label="Ingrese el primer valor" value={input1} onChange={setInput1} />
        <InputComponent label="Ingrese el segundo valor" value={input2} onChange={setInput2} />
        
        {/* Botones */}
        <div className="button-container">
          <AddButton onClick={handleCalculation} />
          <SubtractButton onClick={handleCalculation} />
          <MultiplyButton onClick={handleCalculation} />
          <DivideButton onClick={handleCalculation} />
        </div>
        
        {/* Resultado */}
        {result !== null && <ResultComponent result={result} />}
      </div>
    </div>
  );
}

export default App;