/** @format */
import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReduser from "./dialogsReduser";
import profileReduser from "./profileReduser";
let redusers = combineReducers({
  messagesPage: dialogsReduser,
  profilePage: profileReduser,
});
let store = createStore(redusers);
export default store;
