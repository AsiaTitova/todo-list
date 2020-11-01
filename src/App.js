import React, {useState, useEffect} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import axios from "axios";

import {Tasks, AddTasks, Subtasks, PopupSuccess, PopupConfirmDeletion} from "./components";

const App = () => {
  const [lists, setLists] = useState(null);
  const [colors, setColors] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3001/lists?_expand=color&_embed=tasks')
      .then(({ data }) => {
        setLists(data);
      });
    axios.get('http://localhost:3001/colors').then(({ data }) => {
      setColors(data);
    });
  }, []);

  const onAddNewTask = newTask => {
    const newTasksList = [
      ...lists,
      newTask
    ];
    setLists(newTasksList);
  }

  const onAddNewSubtask = (listId, newSubtask) => {
    const newSubtasks = lists.map(item  => {
      if (item.id === listId) {
        item.tasks = [...item.tasks, newSubtask];
      }
      return item
    });
    setLists(newSubtasks);
  }

  const onEditNameTask = (id, title) => {
    const newTask = lists.map(item  => {
      if (item.id === id) {
        item.name = title;
      }
      return item
    });
    setLists(newTask);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <div className="container">
            <div className="todo">
              <div className="todo__tasks tasks">
                {lists ? (<Tasks items={lists}
                colors={colors}
                onRemove={(id) => {
                  const newLists = lists.filter(item => item.id !== id);
                  setLists(newLists);
                }}
                onClickItem={(item) => {
                  setActiveItem(item);
                }}
                activeItem={activeItem}
                isRemovable={true} />) : ("Загрузка...")}
                {colors ? (<AddTasks
                colors={colors}
                onAddNewTask={onAddNewTask} />) : ("Загрузка...")}
              </div>
              <div className="todo__subtasks">
              {lists && activeItem && (<Subtasks
                list={activeItem}
                onAddNewSubtask={onAddNewSubtask}
                onRemove={(id) => {
                  const newLists = lists.filter(item => item.id !== id);
                  setLists(newLists);
                }}
                onEditTitle={onEditNameTask}
                isRemovable={true} />)}
              </div>
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
