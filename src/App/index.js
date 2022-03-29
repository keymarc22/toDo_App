import React from 'react';
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter/';
import { TodoSearch } from '../TodoSearch/';
import { TodoList } from '../TodoList/';
import { TodoItem } from '../TodoItem/';
import { CreateTodoButton } from '../CreateTodoButton/';
import { Modal } from '../Modal/';
import { TodoForm } from '../TodoForm';
import { SkeletonLoader } from '../SkeletonLoader';
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
    addTodo
  } = useTodos();

  return(
    <React.Fragment>
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>
      <TodoSearch search={search} setSearching={setSearching} />
        <TodoList>
          {error && <p> Hubo un error </p>}
          {loading && <div>
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
            </div>
          }
          {(!loading && !searchedTodos.length) && <p>Crea tu primer ToDO</p>}

          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed= {todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
            ))}
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm 
              addTodo={addTodo}
              setOpenModal={setOpenModal}
            />
          </Modal>
        )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export default App;
