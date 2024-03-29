import React from "react";
import Header from "./Header";
import * as axios from "axios"
import { connect } from "react-redux";
import { setAuthData } from "../../store/AuthReduser";


class HeaderContainer extends React.Component {
  
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true}).then(response => {
     if (response.data.resultCode === 0) {
      let {id ,email, login}= response.data.data;
      this.props.setAuthData(id ,email, login);
     }  
    })
  }
 
  render() {
    return <Header {...this.props} />};
} 

 const mapStateToProps=(state)=>({
isAuth:state.Auth.isAuth,
login:state.Auth.login,
});

export default connect(mapStateToProps,{setAuthData}) (HeaderContainer);