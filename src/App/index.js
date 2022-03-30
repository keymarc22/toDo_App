import React from "react";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter/";
import { TodoSearch } from "../TodoSearch/";
import { TodoList } from "../TodoList/";
import { TodoItem } from "../TodoItem/";
import { CreateTodoButton } from "../CreateTodoButton/";
import { Modal } from "../Modal/";
import { TodoForm } from "../TodoForm";
import { TodoError } from "../TodoError";
import { TodoLoading } from "../TodoLoading";
import { EmptyTodos } from "../EmptyTodos";
import { EmptySearchResults } from "../EmptySearchResult";
// import { TodoProvider } from '../TodoContext/';
// import './App.css';

// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: true },
//   { text: 'Comprar comida', completed: false },
//   { text: 'Buscar Freidora', completed: false },
// ]

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    search,
    setSearching,
    addTodo,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoCounter
        loading={loading}
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />
      <TodoSearch
        loading={loading}
        search={search}
        setSearching={setSearching}
      />

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={<EmptySearchResults searchingText={search} />}
        // render={todo => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed= {todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default App;
