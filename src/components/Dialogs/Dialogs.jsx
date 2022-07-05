import React from "react";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import css from "./Dialogs.module.scss"
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialog}>
                <Dialog name="Adam" id="1" />
                <Dialog name="Denys" id="2" />
                <Dialog name="Vitali" id="3" />
                <Dialog name="Victor" id="4" />
                <Dialog name="Volodymyr" id="5" /> 
            </div>
            <div className={css.items}>
                <Message message="hi" />
                <Message message="hello" />
                <Message message="dsffsd" />
                <Message message="hisfdaf" />
                <Message message="hiaaaaaaaaaaaaaa" />
            </div>
        </div>
    )
};
export default Dialogs;