import React  from 'react'
import css from "./Users.module.scss";
import ava from"./../../img/avatar.jpg";
import { NavLink } from 'react-router-dom';
import * as axios from "axios"

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
                <div>{u.followed ? <button className={css.unfollow} onClick={() => { 
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                            withCredentials:true,
                            headers: {"API-KEY":"b43b1cc4-c02d-4d3c-b7a0-bc2b692f6645"}
                        }).then(response => {
                            if(response.data.resultCode==0){
                                props.unfollow(u.id);
                            }
                          })
                        }}>Unfollow</button>: <button className={css.follow} onClick={() => { 
                            
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                withCredentials:true,
                                headers: {"API-KEY":"b43b1cc4-c02d-4d3c-b7a0-bc2b692f6645"}
                            }).then(response => {
                                if(response.data.resultCode==0){
                                    props.follow(u.id);
                                }
                              }) 
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