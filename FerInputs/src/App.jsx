import { useState } from 'react'
import './App.css'

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  return (
    <div className="App">
      <div className="container">
        <h1>Calculadora de Resultados</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Ingrese el primer valor"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Ingrese el segundo valor"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button>Calcular</button>
        </div>
      </div>
    </div>
  );
}

export default App;