import React from "react";
import { useStorageListener } from "./useStorageListener";
import { FaTimes } from 'react-icons/fa';
import '../ChangeAlert/ChangeAlert.css';

function ChangeAlert({ sincronize }) {
  const { show, toggleShow, setStorageChange } = useStorageListener(sincronize);
  if (show) {
    return (
      <div className="change-alert">
        <div className="icon-delete">
          <FaTimes onClick={()=> setStorageChange(false)}/>
        </div>
        <p>Se detectaron cambios</p>
        <button onClick={toggleShow}>Refrescar página</button>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
