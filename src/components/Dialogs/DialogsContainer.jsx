import React from "react";
import Dialogs from "./Dialogs";    
import { updateNewMessageBodyAC,sendMessageAC } from "../../store/dialogsReduser"
const DialogsContainer = (props) => {

    let state = props.store.getState();

    let   onSendmessageClick   = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (body) => {    
        let action =updateNewMessageBodyAC(body) ;
        props.store.dispatch(action)
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendmessageClick} dialog={state.messagesPage.dialog} message={state.messagesPage.message}
        newMessageBody={state.messagesPage.newMessageBody} />
    )
};
export default DialogsContainer;