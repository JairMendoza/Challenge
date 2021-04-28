import React, {useState} from 'react';
import './assets/css/App.css';

function App() {
  const Titulo = 'Vamos a Jugar a los dados.' 
  const [diceState, setDiceState] = useState(0);
  //const [diceFaceQuantity, setDiceFaceQuantity] = useState(null);
  const throwDice = (num) => {
    const result = Math.floor(Math.random() * num) + 1;
    setDiceState(result); 
  };

  
  return (
    <div className="App">
      <header>
        <h4>
          {Titulo}
        </h4> 
      </header>
      <section className = "App-content"> 
        <div>
          <h4>  
            {'El resultado del Dado es: ' + diceState }
          </h4>
        </div>
        <button onClick={() => throwDice(6)}>Dado de 6 caras.</button>
        <br/><br/>
        <button onClick={() => throwDice(12)}>Dado de 12 caras.</button>
        <br/><br/>
        <button onClick={() => throwDice(20)}>Dado de 20 caras.</button>
        <br/><br/>
        <button onClick={() => throwDice(27)}>Dado de 27 caras.</button>
      </section>
    </div>
  );
}

export default App;
