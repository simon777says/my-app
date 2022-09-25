import React from "react";
import Friends from "./Friends";
import { followAC,setUsersAC,unfollowAC} from "../../store/FriendsReduser";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.frendsPage.users
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
        }
    }
};
const FriendsContainer= connect( mapStateToProps,mapDispatchToProps,)(Friends);
export default FriendsContainer;