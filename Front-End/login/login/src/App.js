import React from 'react';
import './App.css';
import UsuarioEntrada from './UsuarioEntrada';
import UsuarioSaida from './UsuarioSaida';

function App() {
  return (
    <div>      
      <UsuarioEntrada />
      <UsuarioSaida usuario="Marcos Peixoto" />
    </div>
  );
}

export default App;
