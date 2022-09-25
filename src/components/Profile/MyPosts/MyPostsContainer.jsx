import React from "react";
import { connect } from "react-redux";
import {addPostAC,updateNewPostTextAC} from "../../../store/profileReduser";
import MyPosts from "./MyPosts";


    
    let mapStateToProps = (state) => {
        return {
            posts: state.profilePage.posts,
            newPostText:state.profilePage.newPostText
        }
    }
    let mapDispatchToProps = (dispatch) => {
        return {
            addPost: () => {
                dispatch(addPostAC());
            },
            updateNewPostText: (text) => {
                dispatch(updateNewPostTextAC(text));
            }
    }
    
    };  
    const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;





