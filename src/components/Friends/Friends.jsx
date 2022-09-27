import React from "react";
import css from "./Friends.module.scss";
import * as axios from "axios";
import ava from"./../../img/avatar-vector-icon-png_296057.jpg"
const Friends = (props) => {

  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      
      props.setUsers(response.data.items);
    })
  }

    return (
        <div className={css}>
            {props.users.map(u =>
                <div key={u.id} >
                    <span>
                        <div>
                            <img className={css.ava} src={u.photos.small !=null ? u.photos.small : ava}/>
                        </div>
                        <div>{u.followed ? <button className={css.unfollow}
                            onClick={() => { props.unfollow(u.id);}} >Unfollow</button>
                            : <button className={css.follow} onClick={() => { props.follow(u.id);}}>Follow</button>}</div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status }</div>
                    </span>
                    <span>
                        {/* <div>{ u.location.city}</div> */}
                        {/* <div>{ u.location.country}</div>     */}
                    </span>
                </div>
                )}
      </div>
    )
};
  export default Friends;

  
// "items"= [
//   {
//     "name": "noonemassive",
//     "id": 26061,
//     "uniqueUrlName": null,
//     "photos": {
//       "small": null,
//       "large": null
//     },
//     "status": null,
//     "followed": false
//   },

