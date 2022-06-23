import React from "react";
import css from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={css.post}>
      <img className={css.ava} src="https://png.pngtree.com/element_our/png_detail/20181228/avatar-vector-icon-png_296057.jpg" />
      {props.message}
      <div>Like</div>
    </div> 
)
};
export default Post;