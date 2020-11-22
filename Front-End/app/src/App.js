import React from 'react';
import './App.css';
import Person from './Person';
import Person3 from './Person2';

function App() {
  return ( 
    <div>
      <center>
        <h1>Componente pessoa: </h1>
        <Person name="Marcos" age={45} genre="m" />
        <Person3 name="Marcos" age={45} genre="m" />
      </center>
    </div>
  );
}

export default App;
