import React from 'react';
import { AppUi } from './AppUi'
import { TodoProvider } from '../TodoContext/';
// import './App.css';

// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: true },
//   { text: 'Comprar comida', completed: false },
//   { text: 'Buscar Freidora', completed: false },
// ]

function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
