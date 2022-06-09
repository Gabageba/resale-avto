import React from 'react';
import style from './Profile.module.css'
import userPhoto from '../../../assets/user.png'
import {NavLink, useNavigate} from 'react-router-dom'
import {
  ADD_CAR_ROUTE,
  APPLICATIONS_ROUTE,
  FAVORITE_CAR_ROUTE, HISTORY_CAR_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  PROFILE_ROUTE, REFERENCE_ROUTER
} from '../../../utils/const';
import {useDispatch, useSelector} from 'react-redux';
import {setIsAuthAC, setUserAC} from '../../../redux/userReducer';
import {FormattedMessage} from 'react-intl';

const Profile = () => {
  const navigate = useNavigate()
  const isAuth = useSelector(state => state.userData.isAuth)
  const user = useSelector(state => state.userData.user)
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(setUserAC({}))
    dispatch(setIsAuthAC(false))
    localStorage.removeItem('token')
    navigate(MAIN_ROUTE)
  }

  const SelectedLink = () => {
    return (
      select => select.isActive ? style.dropDownLinkActive : style.dropDownLink
    )
  }

  return (
    <span>
      {isAuth ?
        <span>
          <div className={style.dropDown}>
            <div className={style.profile}>
              <img className={style.icon} src={user.additionalInfo.avatar ? process.env.REACT_APP_API_URL + '/' + user.additionalInfo.avatar : userPhoto} alt=""/>
              <p className={style.name}>{user.additionalInfo.name}</p>
            </div>
            <div className={style.dropDownContent}>
              <NavLink to={PROFILE_ROUTE} className={SelectedLink()}><FormattedMessage id='header_myProfile' /></NavLink>
              {user.mainInfo.role === 'ADMIN' && user.additionalInfo.isActivate ?
                <div>
                  <NavLink to={ADD_CAR_ROUTE} className={SelectedLink()}><FormattedMessage id='header_addCar' /></NavLink>
                  <NavLink to={APPLICATIONS_ROUTE} className={SelectedLink()}><FormattedMessage id='header_applications' /></NavLink>
                </div>
                : null}
              <NavLink to={FAVORITE_CAR_ROUTE} className={SelectedLink()}><FormattedMessage id='header_favorite' /></NavLink>
              <NavLink to={HISTORY_CAR_ROUTE} className={SelectedLink()}><FormattedMessage id='header_history' /></NavLink>
              <NavLink to={REFERENCE_ROUTER} className={SelectedLink()}><FormattedMessage id='header_about' /></NavLink>
              {/*<div className={style.dropDownLink} onClick={() => changeLanguage('en')}>Язык: RU</div>*/}
              {/*<div className={style.dropDownLink} onClick={() => changeLanguage('ru')}>Язык: ENG</div>*/}
              <div className={style.dropDownLink} onClick={logOut}><FormattedMessage id='header_exit' /></div>
            </div>
          </div>
        </span> :
        <span>
          <button className={style.authButton} onClick={() => navigate(LOGIN_ROUTE)}><FormattedMessage id='header_login' /></button>
        </span>}
    </span>
  )
}

export default Profile