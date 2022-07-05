import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Message.module.scss"

const Message = (props) => {
    return (
        <div className={css.dialog}>
            <div>{props.message }</div> 
        </div>
    )
};
export default Message;