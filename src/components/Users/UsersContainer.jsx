import React from "react";
import { followAC,setUsersAC,toggleIsFetchingAC,unfollowAC,setCurrentPageAC,setTotalUsersCountAC} from "../../store/UsersReduser";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../universal/Preloder/Preloder";

import * as axios from "axios"

class UsersC extends React.Component {
 
    componentDidMount() {
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      })
    }
  
    onPageChenged= (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      })
    }
  
    render() {
      return <>
      {this.props.isFetching ? <Preloader/> :null }
  <Users onPageChenged={this.onPageChenged}
       pageSize={this.props.pageSize} 
      totalUsersCount={this.props.totalUsersCount} 
      users={this.props.users}
       currentPage={this.props.currentPage} 
       follow={this.props.follow} 
      unfollow={this.props.unfollow} 
      toggleIsFetching={this.props.toggleIsFetching} />
      </>
  }
  }





let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        
}
 };
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC (users))
        },
        setCurrentPage:(pageNumber) => {
            dispatch ( setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount:(totalCount) => {
            dispatch ( setTotalUsersCountAC(totalCount));
        },
        toggleIsFetching:(isFetching) => {
          dispatch (toggleIsFetchingAC(isFetching));
      },
    }
};
const FriendsContainer= connect( mapStateToProps,mapDispatchToProps,)(UsersC);
export default FriendsContainer;