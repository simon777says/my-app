import React from "react";
import css from "./Message.module.scss"

const Message = (props) => {
    return (
        <div className={css.dialog}>
            <div></div>
            <div>{props.messag }</div>
        </div>
    )
};
export default Message;