import React from "react";
import Dialog from "./Dialog/Dialog";
import css from "./Dialogs.module.scss"
import Message from "./Message/Message";
const   Dialogs = (props) => {

    let dialogsElements = props.dialog.map((d, index) => <Dialog name={d.name} key={index} />)
    
    let messagesElements = props.message.map((m,index) => <Message messag={m.messag} key={index}/>)
    
    let newMessageBody = React.createRef();
    
    let onSendmessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = () => {    
        let body = newMessageBody.current.value;
        props. updateNewMessageBody(body);
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
                <div><textarea placeholder="enter your message" onChange={onNewMessageChange} ref={newMessageBody} value={props.newMessageBody} className={css.area} > </textarea></div>
              <div> <button onClick={onSendmessageClick}  >Add</button></div> 
            </div>
        </div>
    )
};
export default Dialogs;