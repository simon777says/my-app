/** @format */
import dialogsReduser from "../store/dialogsReduser";
import profileReduser from "../store/profileReduser";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "hi" },
        { id: 2, message: "hello" },
        { id: 3, message: "velcombec" },
        { id: 4, message: "privit" },
        { id: 5, message: "hiiii" },
        { id: 6, message: "salam" },
      ],
      newPostText: "",
    },

    messagesPage: {
      dialog: [
        { id: 1, name: "Denys" },
        { id: 2, name: "Vitali" },
        { id: 3, name: "Victor" },
        { id: 4, name: "Volodymyr" },
        { id: 5, name: "Adam" },
      ],
      message: [
        { id: 1, messag: "hhhsal" },
        { id: 2, messag: "hhhdsfdassal" },
        { id: 3, messag: "hhhsassssssl" },
        { id: 4, messag: "hhhsal" },
        { id: 5, messag: "hhhsasdfasdal" },
      ],
      newMessageBody: "",
    },
  },
  _rerenderEntireTree() {
    console.log("ddddd");
  },

  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.messagesPage = dialogsReduser(this._state.messagesPage, action);
    this._rerenderEntireTree(this._state);
  },
};

export default store;
window.store = store;
