import React from "react";

import classNames from "classnames";

import './Tasks.scss';

const Tasks = ({items, isRemovable, onClick}) => {
  console.log(items, isRemovable);
  return (
    <React.Fragment>
      <h2 className="tasks__title">Все задачи:</h2>
      <ul className="tasks__list">
        {
          items.map(item => (
            <li className={classNames(item.className, {"tasks__item--active": item.active})} key={item.id}>
              <div className={`tasks__round tasks__round--${item.coloring}`}></div>
              <h3 className="tasks__name">{item.name}</h3>
              <button className="tasks__close" type="button"></button>
            </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Tasks;
