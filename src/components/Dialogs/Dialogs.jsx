import React from "react";
import Dialog from "./Dialog/Dialog";
import css from "./Dialogs.module.scss"
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dio = props.dialog.map(d=><Dialog name={d.name} />)
    let mes=props.message.map(m=><Message messag={m.messag} />)
    return (
        <div className={css.dialogs}>
            <div className={css.dialog}>
                {dio}
            </div>
            <div className={css.items}>
                {mes}
            </div>
        </div>
    )
};
export default Dialogs;