import React from 'react';
import './index.css'
import { FaCheck } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

function TodoItem(props){
  return(
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <FaCheck />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <FaTimes style={{height: "0.5em", width: "0.5em"}} />
      </span>
    </li>
  );
}

export { TodoItem }