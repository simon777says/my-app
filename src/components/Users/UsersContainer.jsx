import React from "react";
import { followSuccess,unfollowSuccess,setCurrentPage,toggleFollowingProgres,getUsersT,follow,unfollow} from "../../store/UsersReduser";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../universal/Preloder/Preloder";
class UsersC extends React.Component {
 
    componentDidMount() {
      this.props.getUsersT(this.props.currentPage,this.props.pageSize);
    }
  
    onPageChenged= (pageNumber) => {
      this.props.getUsersT(pageNumber,this.props.pageSize);
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
      toggleIsFetching={this.props.toggleIsFetching} 
      followingInProgress={this.props.followingInProgress}
   />
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
        followingInProgress:state.usersPage.followingInProgress
}
 };

const FriendsContainer= connect( mapStateToProps,{followSuccess,unfollowSuccess,setCurrentPage,
  toggleFollowingProgres,getUsersT,follow,unfollow})(UsersC);
export default FriendsContainer;


// let mapDispatchToProps = (dispatch) => {
//     return {
//         : (userId) => {
//             dispatch(followAC(userId))
//         },
//         : (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         : (users) => {
//             dispatch(setUsersAC (users))
//         },
//         :(pageNumber) => {
//             dispatch ( setCurrentPageAC(pageNumber));
//         },
//         :(totalCount) => {
//             dispatch ( setTotalUsersCountAC(totalCount));
//         },
//         t:(isFetching) => {
//           dispatch (toggleIsFetchingAC(isFetching));
//       },
//     }
// };