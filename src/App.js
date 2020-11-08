import React, {useState, useEffect} from "react";
// import {Route, useHistory} from "react-router-dom";
import {connect} from "react-redux";
import fire from './config/fire';
import { FirebaseState } from "./context/farebase/FarebaseState";
// import {lists} from "./actions/actionCreator";
// import axios from "axios";

import {Todo, Login} from "./components";

const App = () => {
  // const [lists, setLists] = useState(null);
  // const [colors, setColors] = useState(null);
  // const [users, setUsers] = useState(null);
  // const [activeItem, setActiveItem] = useState(null);
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }

  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }

  const handleLogin = (e) => {
    e.preventDefault();
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch(err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  const handleSignup = (e) => {
    e.preventDefault();
    clearErrors()
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch(err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs()
        setUser(user)
        console.log(user.uid)
      } else {
        setUser("")
      }
    })
  }

  useEffect(() => {
    authListener()
  }, []);

//  let history = useHistory();
//   useEffect(() => {
//     axios.get('http://localhost:3001/lists?_expand=color&_embed=tasks').then(({ data }) => {
//       setLists(data);
//     });
//     axios.get('http://localhost:3001/colors').then(({ data }) => {
//       setColors(data);
//     });
//     axios.get('http://localhost:3001/users').then(({ data }) => {
//       setUsers(data);
//     });
//   }, []);

//   const onLoginNewUser = newUser => {
//     const newUsersList = [...users, newUser];
//     setUsers(newUsersList);
//   }

//   const onAddNewTask = newTask => {
//     const newTasksList = [
//       ...lists,
//       newTask
//     ];
//     setLists(newTasksList);
//   }

//   const onAddNewSubtask = (listId, newSubtask) => {
//     const newSubtasks = lists.map(item  => {
//       if (item.id === listId) {
//         item.tasks = [...item.tasks, newSubtask];
//       }
//       return item
//     });
//     setLists(newSubtasks);
//   }

//   const onEditNameTask = (id, title) => {
//     const newTask = lists.map(item  => {
//       if (item.id === id) {
//         item.name = title;
//       }
//       return item
//     });
//     setLists(newTask);
//   };

//   const onRemoveSubtask = (listId, subtaskId) => {
//     if (window.confirm('Вы действительно хотите удалить задачу?')) {
//       const newList = lists.map(item => {
//         if (item.id === listId) {
//           item.tasks = item.tasks.filter(task => task.id !== subtaskId);
//         }
//         return item;
//       });
//       setLists(newList);
//       axios.delete('http://localhost:3001/tasks/' + subtaskId).catch(() => {
//         alert('Не удалось удалить задачу');
//       });
//     }
//   };

//   useEffect(() => {
//     const listId = history.location.pathname.split('/lists/')[1];
//     if (lists) {
//       const list = lists.find(list => list.id === Number(listId));
//       setActiveItem(list);
//     }
//   }, [lists, history.location.pathname]);

//   const onCompleteSubtask = (listId, subtaskId, completed) => {
//     const newList = lists.map(list => {
//       if (list.id === listId) {
//         list.tasks = list.tasks.map(task => {
//           if (task.id === subtaskId) {
//             task.completed = completed;
//           }
//           return task;
//         });
//       }
//       return list;
//     });
//     setLists(newList);
//     axios
//       .patch('http://localhost:3001/tasks/' + subtaskId, {
//         completed
//       })
//       .catch(() => {
//         alert('Не удалось обновить задачу');
//       });
//   };

  return (
    <div className="todo__container">
        <FirebaseState>
          {user ? (
            <Todo handleLogout={handleLogout} />
          ) : (
            <Login
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              passwordError={passwordError}
            />
          )}
        </FirebaseState>
      </div>
        /* <div className="todo">
          <div className="todo__tasks tasks">
            {lists ? (<Tasks items={lists}
            colors={colors}
            onRemove={(id) => {
              const newLists = lists.filter(item => item.id !== id);
              setLists(newLists);
            }}
            onClickItem={(list) => {
              history.push(`/lists/${list.id}`);
            }}
            activeItem={activeItem}
            isRemovable={true} />) : ("Загрузка...")}
            {colors ? (<AddTasks
            colors={colors}
            onAddNewTask={onAddNewTask} />) : ("Загрузка...")}
          </div>
          <div className="todo__subtasks">
            <Route exact path="/">
                {lists &&
                lists.map(list => (<Subtasks
                  list={list}
                  key={list.id}
                  onAddNewSubtask={onAddNewSubtask}
                  onRemove={onRemoveSubtask}
                  onCompleteSubtask={onCompleteSubtask}
                  onEditTitle={onEditNameTask}
                  isRemovable={true} />))}
            </Route>
            <Route path="/lists/:id">
              {lists && activeItem && (<Subtasks
                list={activeItem}
                onAddNewSubtask={onAddNewSubtask}
                onRemove={onRemoveSubtask}
                onCompleteSubtask={onCompleteSubtask}
                onEditTitle={onEditNameTask}
                isRemovable={true} />)}
            </Route>
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
        <PopupConfirmDeletion /> */
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.lists.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLists: (items => dispatch(setLists(items)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
