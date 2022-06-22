import React from "react";
import css from "./NavBar.module.css"

const NavBar = () => {
    return (
        <div className={css.nav}>
        <div>
            <a>Profile</a>
        </div>
        <div>
            <a>Messges</a>
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
    </div> )
};
export default NavBar;