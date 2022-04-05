const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_USER = 'SET_USER'



let initialState = {
  userData: {},
  isAuth: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTH:
      return {...state, isAuth: action.bool}
    case SET_USER:
      return {...state, userData: action.user}
    default:
      return state
  }
}

export const setIsAuthAC = (bool) => ({type: SET_IS_AUTH, bool })
export const setUserAC = (user) => ({type: SET_USER, user})

export default userReducer