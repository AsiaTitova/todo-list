import React, {useState} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";

import Tasks from "./components/Tasks/Tasks";
import AddTasks from "./components/AddTasks/AddTasks";
import PopupSuccess from "./components/PopupSuccess/PopupSuccess";

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <div className="container">
            <div className="todo">
            <div className="todo__tasks tasks">
                <Tasks items={[
                  {
                    id: 1,
                    className: "tasks__item",
                    name: "Фронтенд",
                    color: "#c9d1d3",
                    coloring: "gray",
                    active: true,
                  },
                  {
                    id: 2,
                    className: "tasks__item",
                    name: "Фильмы и Сериалы",
                    color: "#42b883",
                    coloring: "green",
                  },
                  {
                    id: 3,
                    className: "tasks__item",
                    name: "Реакт",
                    color: "#64c4ed",
                    coloring: "blue",
                  },
                  {
                    id: 4,
                    className: "tasks__item",
                    name: "Заказать пиццу",
                    color: "#ffbbcc",
                    coloring: "pink",
                  },
                  {
                    id: 5,
                    className: "tasks__item",
                    name: "Собрать ребенка в сад",
                    color: "#b6e68d",
                    coloring: "lime",
                  }
                ]}
                isRemovable={true} />
                <AddTasks />
              </div>
              <div className="todo__subtasks"></div>
              </div>
            </div>
            <div className="popup">
              <PopupSuccess items={
                {
                  name: "Задача",
                  task: "Список",
                }
              }
              showPopup={false} />
            </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
