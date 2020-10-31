import React from "react";
import classNames from "classnames";

import Cross from "../../assets/img/cross.png";

import Circle from "../Circle/Circle";

import './Tasks.scss';

const Tasks = ({items, isRemovable}) => {
  return (
    <React.Fragment>
      <h2 className="tasks__title">Все задачи:</h2>
      <ul className="tasks__list">
        {items.map(item => (
          <li className={classNames("tasks__item", {"tasks__item--active": item.active})} key={item.id}>
            <Circle color={item.color}/>
            <h3 className="tasks__name">{item.name}</h3>
            {isRemovable && (<button className="tasks__close" type="button">
              <img className="tasks__img" src={Cross} width="10" height="10" alt="Закрыть"/>
            </button>)}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Tasks;
