import React from "react";
import { follow,setUsers,toggleIsFetching,unfollow,setCurrentPage,setTotalUsersCount} from "../../store/UsersReduser";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../universal/Preloder/Preloder";
import { userAPI} from "../../api/api";
class UsersC extends React.Component {
 
    componentDidMount() {
      this.props.toggleIsFetching(true);
      userAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      })
    }
  
    onPageChenged= (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);
      userAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
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
const FriendsContainer= connect( mapStateToProps,{follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching,})(UsersC);
export default FriendsContainer;