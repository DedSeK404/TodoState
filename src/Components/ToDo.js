import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";

export const ToDo = () => {
  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  return (
    <main>
      {visible && (
        <div className="ToDo_container">
          <div className="ToDo_p_i">
            <input className="input" type="checkbox" />
            <p className="ToDo_P">ToDo Test</p>
          </div>
          <div className="ToDo_Buttons_container">
            <button className="ToDo_Btn">
              <FontAwesomeIcon icon={faPen} />
            </button>
            <button className="ToDo_Btn" onClick={removeElement}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className="ToDo_Btn">
              <FontAwesomeIcon icon={faList} />
            </button>
          </div>
        </div>
      )}
    </main>
  );
};
