import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {    
//ПОМИЛКА KEY 12 РЯДОК


    let postsElement = props.posts.map((p, index) => <Post message={p.message} key={index} />);
    
    let newPostText = React.createRef();
    
    let onAddPost = () => {
        props.addPost();
    };


    let onPostChange = () => {
        let text = newPostText.current.value;
        props.updateNewPostText(text);
    };
    return (
        <div className={css.myPost}>
            my posts,
            <div>
                <textarea onChange={onPostChange} ref={newPostText} value={props.newPostText} ></textarea>
                <button onClick={onAddPost}>new post</button>
            </div>
            {postsElement}

        </div>
    )
};
export default MyPosts;