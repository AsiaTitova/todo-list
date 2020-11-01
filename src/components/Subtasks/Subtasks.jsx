import React from "react";
import axios from "axios";

import AddSubtask from "../AddSubtask/AddSubtask";
import Cross from "../../assets/img/cross.png";
import Edit from "../../assets/img/edit.png";

import './Subtasks.scss';

const Subtasks = ({list, onRemove, isRemovable, onEditTitle, onAddNewSubtask}) => {

  const onRemoveSubtask = (item) => {
    if (window.confirm("Вы действительно хотите удалить задачу?")) {
      onRemove(item);
    }
  }

  const editTitle = () => {
    const newTitle = window.prompt("Введите новое название списка задач", list.name);
    if (newTitle) {
      onEditTitle(list.id, newTitle);
      axios.patch('http://localhost:3001/lists/' + list.id, {
        name: newTitle
      }).catch(() => {
        alert("Не удалось сменить название");
      });
    }
  }

  return (
    <React.Fragment>
      <div className="subtasks__wrap">
        <h2 className="subtasks__title">{list.name}</h2>
        <button onClick={editTitle} className="subtasks__edit" type="button">
        <img className="subtasks__img" src={Edit} width="15" height="15" alt="Закрыть"/>
        </button>
      </div>
      {!list.tasks.length && (<h3 className="subtasks__no">Задачи отсутсвуют</h3>)}
      {list.tasks.map(task => (
        <ul className="subtasks__list" key={task.id}>
        <li className="subtasks__item">
          <form className="subtasks__checkbox">
            <input onChange={(evt) => (evt.target.checked)} className="subtasks__input visually-hidden" type="checkbox" id={`check-${task.id}`} checked={task.completed}></input>
            <label className="subtasks__label" htmlFor={`check-${task.id}`}></label>
            <span className="subtasks__name">{task.text}</span>
            <input readOnly className="subtasks__input-quickly visually-hidden" type="checkbox" id={`check-quickly-${task.id}`} checked={task.quickly}></input>
            <label className="subtasks__label-quickly" htmlFor={`check-quickly-${task.id}`}></label>
            {isRemovable && (<button onClick={() => onRemoveSubtask()} className="subtasks__close" type="button"></button>)}
          </form>
        </li>
      </ul>
      ))}
      <AddSubtask
        list={list}
        onAddNewSubtask={onAddNewSubtask}
      />
    </React.Fragment>
  );
};

export default Subtasks;
