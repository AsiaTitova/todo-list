import {combineReducers} from "redux";
import listsReducer from "./lists";

const rootReducer = combineReducers({
  lists: listsReducer,
});

console.log(listsReducer);
export default rootReducer;
