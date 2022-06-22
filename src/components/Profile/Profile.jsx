import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import css from "./Profile.module.css";

const Profile = () => {
  return (
    <div className="conten">
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
        <MyPosts/>
    </div>
)
};
export default Profile;