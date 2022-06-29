import React from "react";
import css from "./NavBar.module.css"

const NavBar = (props) => {
    return (
        <div className={css.nav}>
            <div>
                <a href="/profile" >Profile</a>
            </div>
            <div>
                <a href = "/dialogs" >Messges</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <br />
                <a>Setings</a>
            </div>
        </div>)
};
export default NavBar;