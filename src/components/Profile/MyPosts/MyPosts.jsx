import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message}/>);
    let newPost = React.createRef();
    let addPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text)
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