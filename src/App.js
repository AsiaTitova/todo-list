import React, {useState} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import DB from "./assets/bd.json";

import Tasks from "./components/Tasks/Tasks";
import AddTasks from "./components/AddTasks/AddTasks";
import PopupSuccess from "./components/PopupSuccess/PopupSuccess";
import PopupConfirmDeletion from "./components/PopupConfirmDeletion/PopupConfirmDeletion";

const App = () => {
  const [lists, setLists] = useState(DB.lists.map(item => {
    item.color = DB.colors.filter(color => color.id === item.colorId)[0].name;
    return item;
  }));

  const onAddNewTask = newTask => {
    console.log("Добавлен список: ", newTask);
    const newTasksList = [
      ...lists,
      newTask
    ];
    setLists(newTasksList);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <div className="container">
            <div className="todo">
            <div className="todo__tasks tasks">
                <Tasks items={lists}
                colors={DB.colors}
                isRemovable={true} />
                <AddTasks
                colors={DB.colors}
                onAddNewTask={onAddNewTask} />
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
              } />
            </div>
            <div className="popup">
              <PopupConfirmDeletion />
            </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
