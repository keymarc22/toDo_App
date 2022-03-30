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
import { ChangeAlert } from "../ChangeAlert";

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
    sincronizeTodos
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

      <ChangeAlert sincronize={sincronizeTodos}/>
    </React.Fragment>
  );
}

export default App;
