import React from "react";
import css from "./Friends.module.scss"

const Friends = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: true,
                fullName: "Ben",
                status: "online",
                photoUrl:
                  "https://png.pngtree.com/element_our/png_detail/20181228/avatar-vector-icon-png_296057.jpg",
                location: {
                  city: "Lviv",
                  country: "Ukraine",
                },
              },
              {
                id: 2,
                followed: false,
                fullName: "gsaafff",
                status: "online",
                photoUrl:
                  "https://png.pngtree.com/element_our/png_detail/20181228/avatar-vector-icon-png_296057.jpg",
                location: {
                  city: "Lviv",
                  country: "Ukraine",
                },
              },
              {
                id: 3,
                followed: true,
                fullName: "авпgварen",
                status: "online",
                photoUrl:
                  "https://png.pngtree.com/element_our/png_detail/20181228/avatar-vector-icon-png_296057.jpg",
                location: {
                  city: "Lviv",
                  country: "Ukraine",
                },
              },
              {
                id: 4,
                followed: false,
                fullName: "Bfваen",
                status: "online",
                photoUrl:
                  "https://png.pngtree.com/element_our/png_detail/20181228/avatar-vector-icon-png_296057.jpg",
                location: {
                  city: "Lviv",
                  country: "Ukraine",
                },
              },
            ])}


    return (
        <div className={css}>
            {props.users.map(u =>
                <div key={u.id} >
                    <span>
                        <div>
                            <img className={css.ava} src={u.photoUrl}/>
                        </div>
                        <div>{u.followed ? <button className={css.unfollow}
                            onClick={() => { props.unfollow(u.id);}} >Unfollow</button>
                            : <button className={css.follow} onClick={() => { props.follow(u.id);}}>Follow</button>}</div>
                    </span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status }</div>
                    </span>
                    <span>
                        <div>{ u.location.city}</div>
                        <div>{ u.location.country}</div>    
                    </span>
                </div>
                )}
      </div>
    )
};
export default Friends;