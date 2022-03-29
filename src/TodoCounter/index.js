import React from 'react';
import './index.css';

//const styles = {
  //color: 'red',
  //backgroundColor: 'yellow'
//}

function TodoCounter({totalTodos, completedTodos}){
  return(
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };