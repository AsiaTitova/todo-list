import React, {useState, useEffect} from "react";
import axios from 'axios';

import Circle from "../Circle/Circle";

import './AddTasks.scss';

const AddTasks = ({colors, onAddNewTask, openPopup}) => {
  const [selectedColor, selectColor] = useState(3); // цвет метки
  const [inputValue, setInputValue] = useState("");            // текст, введеный в поле "название задачи"

  useEffect(() => {
    if (Array.isArray(colors)) {
      selectColor(colors[0].id);
    }
  }, [colors]);

  // добавление новой задачи

  const addTask = () => {
    if (!inputValue) {
      alert("Введите название задачи");
      return;
    }
    axios
      .post('http://localhost:3001/lists', {
        name: inputValue,
        colorId: selectedColor
      })
      .then(({ data }) => {
        const color = colors.filter(color => color.id === selectedColor)[0].name;
        const listObj = { ...data, color: { name: color } };
        onAddNewTask(listObj);
        setInputValue('');
        selectColor(colors[0].id);
      });
  }

  return (
      <form className="todo__form-tasks form-tasks">
        <div className="form-tasks__wrap">
          <label className="form-tasks__label"></label>
          <input onChange={evt => setInputValue(evt.target.value)} className="form-tasks__input" type="text" placeholder="Добавьте новый список задач" value={inputValue}/>
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
