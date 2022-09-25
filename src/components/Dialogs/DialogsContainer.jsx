import React from "react";
import Dialogs from "./Dialogs";    
import { updateNewMessageBodyAC,sendMessageAC } from "../../store/dialogsReduser"
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        message:state.messagesPage.message,
        dialog:state.messagesPage.dialog,
        newMessageBody:state.messagesPage.newMessageBody
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyAC(body));
        },
        sendMessage: () => {
            dispatch(sendMessageAC());
        }
    }
}
    const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
    export default DialogsContainer;