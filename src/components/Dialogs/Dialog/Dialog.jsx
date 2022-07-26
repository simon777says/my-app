import React from "react";
import {NavLink} from "react-router-dom";
import css from "./Dialog.module.scss"

const Dialog = (props) => {
    return (
        <div className={css.dialog}>
            <div><NavLink to={'/dialog/' + props.id}> {props.name}</NavLink></div>


        </div>
    )
};
export default Dialog;