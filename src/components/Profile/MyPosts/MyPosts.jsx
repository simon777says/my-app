import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={css.myPost}>
          my posts,
          
      <div>new post</div>
      <Post/>
    </div>   
)};
export default MyPosts;