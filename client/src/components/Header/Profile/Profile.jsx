import React from 'react';
import style from './Profile.module.css'
import userPhoto from '../../../assets/user.png'
import {NavLink, useNavigate} from 'react-router-dom'
import {ADD_CAR_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE} from '../../../utils/const';
import {useDispatch, useSelector} from 'react-redux';
import {setIsAuthAC, setUserAC} from '../../../redux/userReducer';

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
              <img className={style.icon} src={user.additionalInfo.avatar ? process.env.REACT_APP_API_URL + user.additionalInfo.avatar : userPhoto} alt=""/>
              <p className={style.name}>{user.additionalInfo.name}</p>
            </div>
            <div className={style.dropDownContent}>
              <NavLink to={PROFILE_ROUTE} className={SelectedLink()}>Мой профиль</NavLink>
              {user.mainInfo.role === 'ADMIN' && user.additionalInfo.isActivate ? <NavLink to={ADD_CAR_ROUTE} className={SelectedLink()}>Добавить автомобиль</NavLink> : null}
              <NavLink to={'favorites'} className={SelectedLink()}>Избранное</NavLink>
              <NavLink to={'history'} className={SelectedLink()}>История автомобилей</NavLink>
              <NavLink to={'about'} className={SelectedLink()}>Справка</NavLink>
              <div className={style.dropDownLink} onClick={logOut}>Выход</div>
            </div>
          </div>
        </span> :
        <span>
          <button className={style.authButton} onClick={() => navigate(LOGIN_ROUTE)}>Войти</button>
        </span>}
    </span>
  )
}

export default Profile