/** @format */

const NEW_MESSAGE_BODY = "NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

//iniialState це база для початку роботи

let initialState = {
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
};

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newB = { id: 6, messag: state.newMessageBody };
      console.log(state.newMessageBody);
      return {
        ...state,
        message: [...state.message, newB],
        newMessageBody: "",
      };
    case NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    default:
      return state;
  }
};

export const sendMessageAC = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyAC = (body) => ({
  type: NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReduser;
