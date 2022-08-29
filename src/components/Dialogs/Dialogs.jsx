import React from "react";
import Dialog from "./Dialog/Dialog";
import css from "./Dialogs.module.scss"
import Message from "./Message/Message";    

import { updateNewMessageBodyAC,sendMessageAC } from "./../../store/dialogsReduser"
const Dialogs = (props) => {

    let dialogsElements = props.dialog.map(d => <Dialog name={d.name}/>)
    let messagesElements = props.message.map(m => <Message messag={m.messag}/>)
    let newMessageBody = props.newMessageBody;
    // let newMessage = React.createRef();
    let   onSendmessageClick   = () => {
        props.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (event) => {    
        let body = event.target.value;
        props.dispatch(updateNewMessageBodyAC(body))
    }
    return (<div>
            <div className={css.dialogs}>
                <div className={css.dialog}>
                    {dialogsElements}
                </div>
                <div className={css.items}>
                    {messagesElements}
                </div>

            </div>
            <div className={css.text}>
                <div><textarea placeholder="enter your message" onChange={onNewMessageChange}   value={newMessageBody} className={css.area} > </textarea></div>
              <div> <button onClick={onSendmessageClick}  >Add</button></div> 
            </div>
        </div>
    )
};
export default Dialogs;