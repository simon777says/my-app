import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {
 let postsElement=  props.posts.map(p=><Post message={p.message} />);
 let newPost=React.createRef();
let addPost= ()=>{
    let text=newPost.current.value
    alert(text)
};
  return (
    <div className={css.myPost}>
          my posts,
        
      <div>
       <textarea ref={newPost} ></textarea>
      <button onClick={addPost} >new post</button>
      </div>
        {postsElement}

    </div>   
)};
export default MyPosts;