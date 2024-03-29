/** @format */
import { userAPI} from "../api/api";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT="SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING="TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS="TOGGLE_IS_FOLLOWING_PROGRESS";


let initialState = {
  users: [],
  pageSize:100,
  totalUsersCount:0,
  currentPage :1,
  isFetching:false,
  followingInProgress:[],
};

const UsersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return { ...state, users:action.users };
        
    case SET_CURRENT_PAGE:
      return{...state,currentPage:action.currentPage};

    case SET_TOTAL_USERS_COUNT:
      return{...state,totalUsersCount:action.totalCount};

    case TOGGLE_IS_FETCHING:
      return{...state,isFetching:action.isFetching};

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return{...state,
        followingInProgress:action.isFetching
      ? [...state.followingInProgress,action.userId]
      : state.followingInProgress.filter(id=>id !==action.userId)
      };

    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgres = (isFetching,userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching,userId });

export const getUsersT =(currentPage,pageSize) => { 
  return (dispatch) => {
  dispatch(toggleIsFetching(true));
      userAPI.getUsers(currentPage,pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
      })
}};
export const unfollow =(userId) => { 
  return (dispatch) => {
       dispatch(toggleFollowingProgres(true,userId));
    userAPI.unfollow(userId).then(response => {
         if(response.data.resultCode===0){
          dispatch(unfollowSuccess(userId));
         }
         dispatch(toggleFollowingProgres(false,userId));
       })
}};

export const follow =(userId) => { 
  return (dispatch) => {
       dispatch(toggleFollowingProgres(true,userId));
    userAPI.follow(userId).then(response => {
         if(response.data.resultCode===0){
          dispatch(followSuccess(userId));
         }
         dispatch(toggleFollowingProgres(false,userId));
       })
}};
export default UsersReduser;
