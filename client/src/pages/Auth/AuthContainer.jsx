import {connect} from "react-redux";
import {setIsAuthAC, setUserAC} from "../../redux/userReducer";
import Auth from "./Auth";

let mapStateToProps = (state) => {
  return {
    userData: state.user.userData,
    isAuth: state.user.isAuth
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setIsAuth: (bool) => {
      dispatch(setIsAuthAC(bool))
    },
    setUser: (user) => {
      dispatch(setUserAC(user))
    }
  }
}

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth)

export default AuthContainer