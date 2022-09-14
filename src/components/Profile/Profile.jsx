import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import css from "./Profile.module.scss";

const Profile = (props) => {

  return (
    <div >
        <div>
          <img
            className={css.img}
            src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Nature-HD-2560-x-1440-Image.jpg"
          />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRljZkkRywYKrvWq89YZZ6bZFWoOu9_b_vCgA&usqp=CAU" />
          <br />
          discription
        </div>
        <br />
        <MyPostsContainer store={props.store} />
    </div>
)
};
export default Profile;