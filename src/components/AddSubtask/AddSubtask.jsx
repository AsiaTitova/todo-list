import React, {useState} from "react";
import axios from "axios";

import './AddSubtask.scss';

const AddSubtask = ({list, onAddNewSubtask}) => {
  const [inputValue, setInputValue] = useState("");            // текст, введеный в поле "название задачи"
  const [checkboxValue, setCheckboxValue] = useState();

  // добавление новой задачи

  const addSubtask = () => {
    if (!inputValue) {
      alert("Введите название задачи");
      return;
    }
    const newSubtask = {
      "listId": list.id,
      "text": inputValue,
      "completed": false,
      "quickly": checkboxValue
    }

    axios.post("http://localhost:3001/tasks/", newSubtask).then(({data}) => {
      onAddNewSubtask(list.id, data)
      resetInputSubtask();
    })
  }

  const resetInputSubtask = () => {
    setInputValue("");
  }

  return (
      <form className="todo__form-subtasks form-subtasks">
        <div className="form-subtasks__wrap">
          <label className="form-subtasks__label visually-hidden"></label>
          <input onChange={evt => setInputValue(evt.target.value)} className="form-subtasks__input" type="text" placeholder="Текст подзадачи" value={inputValue}/>
          <div className="form-subtasks__checkbox">
            <label className="form-subtasks__label-quickly" htmlFor="quickly">Срочная задача</label>
            <input onChange={evt => setCheckboxValue(evt.target.checked)} className="form-subtasks__quickly" type="checkbox" name="quickly" id="quickly" checked={checkboxValue}/>
          </div>
        </div>
        <div className="form-subtasks__wrap form-subtasks__wrap--button">
          <button onClick={() => addSubtask()} className="form-subtasks__button form-subtasks__button--plus" type="button">Добавить</button>
          <button onClick={() => resetInputSubtask()} className="form-subtasks__button" type="button">Отмена</button>
        </div>
      </form>
  );
};

export default AddSubtask;
