import React, {useState} from "react";

import Circle from "../Circle/Circle";

import './AddTasks.scss';

const AddTasks = ({colors, onAddNewTask, openPopup}) => {
  const [selectedColor, selectColor] = useState(colors[0].id); // цвет метки
  const [inputValue, setInputValue] = useState("");            // текст, введеный в поле "название задачи"

  // добавление новой задачи

  const addTask = () => {
    if (!inputValue) {
      alert("Введите название задачи");
      return;
    }

    onAddNewTask({id: Math.random(), name: inputValue, color: colors.filter(color => color.id === selectedColor)[0].name});
    setInputValue("");
    selectColor(colors[0].id);
  }

  return (
      <form className="todo__form-tasks form-tasks">
        <div className="form-tasks__wrap">
          <label className="form-tasks__label"></label>
          <input onChange={evt => setInputValue(evt.target.value)} className="form-tasks__input" type="text" placeholder="Название задачи" value={inputValue}/>
          <div className="form-tasks__colors colors">
            {colors.map(color => (
              <Circle
                onClick={() => selectColor(color.id)}
                key={color.id}
                color={color.name}
                className={selectedColor === color.id && "circle--active"}
              />
            ))}
          </div>
          <button onClick={() => addTask()} className="form-tasks__button" type="button">Добавить</button>
        </div>
      </form>
  );
};

export default AddTasks;
