import React from "react";
import Preloader from "../universal/Preloder/Preloder";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import css from "./Profile.module.scss";

const Profile = (props) => {
if (!props.profile){
  return<Preloader/>
}

  return (
    <div >
        <div>
          <img
            className={css.img}
            src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Nature-HD-2560-x-1440-Image.jpg"
          />
        </div>
        <div>
          <img src={props.profile.photos.large} />
          <br />
          discription
        </div>
        <br />
        <MyPostsContainer  />
    </div>
)
};
export default Profile;












