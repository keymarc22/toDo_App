import React from "react";
import "./index.css";

//const styles = {
//color: 'red',
//backgroundColor: 'yellow'
//}

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <div>
      <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
        Has completado {completedTodos} de {totalTodos} TODOs
      </h2>
    </div>
  );
}

export { TodoCounter };
