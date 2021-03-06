import React from 'react';
import './index.css'

function TodoList(props){
  return(
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults}

      {(!props.loading && !props.error) && props.searchedTodos.map(props.children  || props.render)}

      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList }