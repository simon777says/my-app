/** @format */
import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReduser from "./dialogsReduser";
import friendsReduser from "./FriendsReduser";
import profileReduser from "./profileReduser";
let redusers = combineReducers({
  messagesPage: dialogsReduser,
  profilePage: profileReduser,
  frendsPage: friendsReduser,
});
let store = createStore(redusers);
window.store = store;
export default store;
