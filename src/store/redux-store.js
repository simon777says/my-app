/** @format */
import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReduser from "./dialogsReduser";
import usersReduser from "./UsersReduser";
import profileReduser from "./profileReduser";
let redusers = combineReducers({
  messagesPage: dialogsReduser,
  profilePage: profileReduser,
  usersPage: usersReduser,
});
let store = createStore(redusers);
window.store = store;
export default store;
