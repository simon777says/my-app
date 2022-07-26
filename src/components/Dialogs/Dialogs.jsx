import React from "react";
import Dialog from "./Dialog/Dialog";
import css from "./Dialogs.module.scss"
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dio = props.dialog.map(d => <Dialog name={d.name}/>)
    let mes = props.message.map(m => <Message messag={m.messag}/>)
    let newMessage = React.createRef();
    let addNewMessage = () => {
        let text = newMessage.current.value
        alert(text)
    }
    return (<div>
            <div className={css.dialogs}>
                <div className={css.dialog}>
                    {dio}
                </div>
                <div className={css.items}>
                    {mes}
                </div>

            </div>
            <div className={css.text}>
                <textarea ref={newMessage} className={css.area}> </textarea>
                <button onClick={addNewMessage} >Add</button>
            </div>
        </div>
    )
};
export default Dialogs;