import React from "react";
import FriendsC from "./FriendsC";
import { followAC,setUsersAC,unfollowAC,setCurrentPageAC,setTotalUsersCountAC} from "../../store/FriendsReduser";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.frendsPage.users,
        pageSize:state.frendsPage.pageSize,
        totalUsersCount:state.frendsPage.totalUsersCount,
        currentPage:state.frendsPage.currentPage,
        
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
        }
    }
};
const FriendsContainer= connect( mapStateToProps,mapDispatchToProps,)(FriendsC);
export default FriendsContainer;