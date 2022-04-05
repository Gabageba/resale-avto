import {connect} from "react-redux";
import Profile from "./Profile";

let mapStateToProps = (state) => {
  return {
    userData: state.user.userData,
    isAuth: state.user.isAuth
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

  }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer