import React  from 'react'
import css from "./Users.module.scss";
import ava from"./../../img/avatar.jpg";
import { NavLink } from 'react-router-dom';

let Users =(props) => {
    let pagesCount= Math.ceil (props.totalUsersCount/props.pageSize);
    let pages=[];
    for ( let i=1; i<= pagesCount;i++){
        pages.push(i);
    } 
    return (<div >
        <div className={css.pages} > {pages.map(p => { return  <button className={props.currentPage === p && css.selected} onClick={()=>{props.onPageChenged(p)}}>{p}</button> })} </div> 
    {props.users.map(u =>
        <div key={u.id} >
            <span>
                <div><NavLink to={'/profile/'+ u.id}>
                    <img className={css.ava} src={u.photos.small !=null ? u.photos.small : ava}/>
                    </NavLink>
                </div>
                <div>{u.followed ? <button disabled={props.followingInProgress.some(id=>id===u.id)} className={css.unfollow} onClick={() => { 
                    props.unfollow(u.id)
                        }}>Unfollow</button>: <button disabled={props.followingInProgress.some(id=>id===u.id)} className={css.follow} onClick={() => { 
                            props.follow(u.id)
                            }}>Follow</button>}</div>
            </span>
            <span>
                <div>{u.name} </div>
                <div>{u.status }</div>
            </span>
            <span>
                <div>' u.city'</div> 
                
                <div>" u.location.country'</div>
            </span>
        </div>
        )}
</div>
    )

}
export default Users;