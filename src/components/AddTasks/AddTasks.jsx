import React from "react";
import PropTypes from "prop-types";

import './AddTasks.scss';

const AddTasks = () => {

  return (
      <form className="todo__form-tasks form-tasks">
        <div className="form-tasks__wrap">
          <label className="form-tasks__label"></label>
          <input className="form-tasks__input"/>
          <button onClick={() => setShowPopup(true)} className="form-tasks__button" type="button">Добавить</button>
        </div>
      </form>
  );
};

export default AddTasks;
