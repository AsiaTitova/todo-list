import React from "react";
import classNames from "classnames";
import axios from 'axios';

import Cross from "../../assets/img/cross.png";

import Circle from "../Circle/Circle";

import './Tasks.scss';

const Tasks = ({items, onRemove, isRemovable, onClickItem, activeItem}) => {
  const onRemoveTask = (item) => {
    if (window.confirm("Вы действительно хотите удалить список?")) {
      axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
        onRemove(item.id);
      });
    }
  }

  return (
    <React.Fragment>
      <h2 className="tasks__title">Все задачи:</h2>
      <ul className="tasks__list">
        {items.map(item => (
          <li onClick={() => onClickItem(item)} className={classNames("tasks__item", {"tasks__item--active": activeItem && activeItem.id === item.id})} key={item.id}>
            <Circle color={item.color.name}/>
            <h3 className="tasks__name">
              {item.name}
              {item.tasks && item.tasks.length > 0 && ` (${item.tasks.length})`}
            </h3>
            {isRemovable && (<button onClick={() => onRemoveTask(item)} className="tasks__close" type="button"></button>)}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Tasks;
