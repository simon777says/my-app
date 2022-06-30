import React from "react"; 
import css from "./Header.module.scss"

const Header = (props) => {
  return (
    <div className={css.header}>
        <img className={css.img} src="https://wac-cdn.atlassian.com/dam/jcr:a9271a17-3092-4c55-9054-2b8546e889b8/Logo-Circle_Pendo_2x.png?cdnVersion=393"/>
      </div>
)};
export default Header;