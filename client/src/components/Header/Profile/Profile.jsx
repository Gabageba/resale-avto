import React from 'react';
import style from './Profile.module.css'
import userPhoto from '../../../assets/user.png'
import {NavLink, useNavigate} from 'react-router-dom'
import {ADD_CAR_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE} from '../../../utils/const';
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
  }


  return (
    <span>
      {isAuth ?
        <span>
          <div className={style.dropDown}>
            <div className={style.profile}>
              <img className={style.icon} src={user.additionalInfo.avatar || userPhoto} alt=""/>
              <p className={style.name}>{user.additionalInfo.name}</p>
            </div>
            <div className={style.dropDownContent}>
              <NavLink to={PROFILE_ROUTE} className={style.dropDownLink}>Мой профиль</NavLink>
              {user.mainInfo.role === 'ADMIN' ? <div className={style.dropDownLink} onClick={() => navigate(ADD_CAR_ROUTE)} >Добавить автомобиль</div> : null}
              <NavLink to={''} className={style.dropDownLink}>Избранное</NavLink>
              <NavLink to={''} className={style.dropDownLink}>История автомобилей</NavLink>
              <NavLink to={''} className={style.dropDownLink}>История поиска</NavLink>
              <NavLink to={''} className={style.dropDownLink}>Справка</NavLink>
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