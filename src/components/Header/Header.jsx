import React from "react"; 
import css from "./Header.module.scss"
import logo from "../../img/Logo.png"
import { NavLink } from "react-router-dom";


const Header = (props) => {

  return (
    <div className={css.header}>
        <img className={css.img} src={logo} />
        <div className={css.login} >{props.isAuth ? props.login : <NavLink to={'/login'} >Login</NavLink>}</div>
        
      </div>
)};
export default Header;