import React from "react";
import css from "./Friends.module.scss";
import * as axios from "axios";
import ava from"./../../img/avatar-vector-icon-png_296057.jpg"
class FriendsC extends React.Component {
 
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    })
  }

  onPageChenged= (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
    })
  }

  render() {

    let pagesCount= Math.ceil (this.props.totalUsersCount/this.props.pageSize);
let pages=[];
for ( let i=1; i<= pagesCount;i++){
  pages.push(i);
}
    return <div>
      
      <div className={css.pages}  >
        {pages.map(p => {
        return  <span className={this.props.currentPage === p && css.selected} onClick={()=>{this.onPageChenged(p)}}>{p}</span>
        })}
        </div> 

    {this.props.users.map(u =>
      <div key={u.id} >
            <span>
                <div>
                    <img className={css.ava} src={u.photos.small !=null ? u.photos.small : ava}/>
                </div>
                <div>{u.followed ? <button className={css.unfollow}
                    onClick={() => { this.props.unfollow(u.id);}} >Unfollow</button>
                    : <button className={css.follow} onClick={() => { this.props.follow(u.id);}}>Follow</button>}</div>
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
}
}
export default FriendsC;