/** @format */
import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReduser from "./dialogsReduser";
import usersReduser from "./UsersReduser";
import profileReduser from "./profileReduser";
import AuthReduser from "./AuthReduser";

let redusers = combineReducers({
  messagesPage: dialogsReduser,
  profilePage: profileReduser,
  usersPage: usersReduser,
  Auth: AuthReduser
});
let store = createStore(redusers);
window.store = store;
export default store;
