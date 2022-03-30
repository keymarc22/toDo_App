import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({show, toggleShow}) {
  if (show) {
    return (
      <div>
        <p>Se detectaron cambios</p>
        <button
          onClick={toggleShow}
        >
          Refrescar página
        </button>
      </div>
    );
  } else {
    return null
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
