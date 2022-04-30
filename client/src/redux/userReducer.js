const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_USER = 'SET_USER'

let initialState = {
  isAuth: false,
  user: {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTH:
      return {...state, isAuth: action.auth}
    case SET_USER:
      return {...state, user: action.user}
    default:
      return state
  }
}

export const setIsAuthAC = (auth) => ({type: SET_IS_AUTH, auth})
export const setUserAC = (user) => ({type: SET_USER, user})


export default userReducer