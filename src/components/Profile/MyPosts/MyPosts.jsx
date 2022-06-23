import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div className={css.myPost}>
          my posts,
          
      <div>
        <input/>
      <button>new post</button>  
      </div>
      <Post message='hi' />
      <Post message='good morning'/>
      <Post message='ddddsfagxc'/>
      <Post message='hizzgsa'/>
      <Post message='hi'/>
      <Post message='hi'/>
    </div>   
)};
export default MyPosts;