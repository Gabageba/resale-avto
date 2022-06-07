import {LOCALES} from '../i18n/locales';

const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_USER = 'SET_USER'
const SET_LOCALE = 'SET_LOCALE'

let initialState = {
  isAuth: false,
  user: {},
  locale: LOCALES.RUSSIAN
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTH:
      return {...state, isAuth: action.auth}
    case SET_USER:
      return {...state, user: action.user}
    case SET_LOCALE:
      return {...state, locale: action.loc}
    default:
      return state
  }
}

export const setIsAuthAC = (auth) => ({type: SET_IS_AUTH, auth})
export const setUserAC = (user) => ({type: SET_USER, user})
export const setLocaleAC = (loc) => ({type: SET_LOCALE, loc})


export default userReducer