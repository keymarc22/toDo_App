import React from "react";
import { TodoSearch } from "../TodoSearch/";
import "./index.css";

//const styles = {
//color: 'red',
//backgroundColor: 'yellow'
//}

function TodoCounter({ totalTodos, completedTodos, loading, listStyle, search, setSearching }) {
  return (
    <header className={`header-container TodoCounter ${!!loading && "TodoCounter--loading"}`}>
      <div className="title-section">
        <h2>Listado de tareas</h2>
      </div>
      <div className="details-section">
        <h2>
          {totalTodos} tareas en total.
        </h2>
        <h2>
          {completedTodos} completadas
        </h2>
      </div>
      <TodoSearch
        loading={loading}
        search={search}
        setSearching={setSearching}
      />
    </header>
  );
}

export { TodoCounter };
