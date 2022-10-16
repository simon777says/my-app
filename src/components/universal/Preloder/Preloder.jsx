import React from "react";
import preloader from "../../../img/preloader.webp";
import css from "./Preloader.module.scss"
let Preloader =()=>{
    return  <>
  <img className={css.po} src={preloader}/>
  </>
}
export default Preloader;