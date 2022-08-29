import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator,updateNewPostTextActionCreator} from "../../../store/profileReduser";



const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message}/>);
    let newPost = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    let onPostChange = () => {
        let text = newPost.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };
    return (
        <div className={css.myPost}>
            my posts,

            <div>
                <textarea onChange={onPostChange} value={props.newPostText} ref={newPost}></textarea>
                <button onClick={addPost}>new post</button>
            </div>
            {postsElement}

        </div>
    )
};
export default MyPosts;