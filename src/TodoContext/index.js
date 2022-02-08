import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [search, setSearching] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!search.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const addTodo = (text) => {
    const newTodos = [...todos];

    newTodos.push({
      completed: false,
      text,
    })
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];

    const todoIndex = todos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];

    const todoIndex = todos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  


  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      search,
      setSearching,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export {TodoContext, TodoProvider}