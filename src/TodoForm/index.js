import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext)

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }
  return (
    <div className='TodoForm'>
      <form onSubmit={onSubmit}>
        <label>Nuevo ToDo</label>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder='Algo que tengo que hacer'
        />

        <div className='buttons'>
          <button
            className='cancelButton'
            type='button'
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            className='submitButton'
            type='submit'
          >
            Añadir
          </button>
        </div>
      </form>
    </div>
  );
}

export { TodoForm };