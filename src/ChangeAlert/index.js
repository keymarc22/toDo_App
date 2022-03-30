import React from "react";
import { useStorageListener } from "./useStorageListener";

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <div>
        <p>Se detectaron cambios</p>
        <button onClick={toggleShow}>Refrescar página</button>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
