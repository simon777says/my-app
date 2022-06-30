import React from "react";
import { NavLink } from "react-router-dom";
import css from "./NavBar.module.scss"

const NavBar = (props) => {
    return (
        <div className={css.nav}>
            <div >
                <NavLink className = { navData => navData.isActive ? css.active : css.item } to="/profile" >Profile</NavLink>
            </div>
            <div  >
                <NavLink  className = { navData => navData.isActive ? css.active : css.item } to = "/dialogs" >Messges</NavLink>
            </div>
            <div >
                <NavLink   to ="/news" className = { navData => navData.isActive ? css.active : css.item }>News</NavLink>
            </div>
            <div >
                <NavLink className = { navData => navData.isActive ? css.active : css.item } to="music">Music</NavLink>
            </div>
            <div >
                <br />
                <NavLink className = { navData => navData.isActive ? css.active : css.item } to="/setings">Setings</NavLink>
            </div>
        </div>)
};
export default NavBar;