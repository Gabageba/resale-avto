import React from 'react';
import style from './Profile.module.css'
import user from '../../../assets/user.png'
import {useNavigate} from 'react-router-dom'
import {LOGIN_ROUTE} from "../../../utils/const";
import {useSelector} from 'react-redux';

const Profile = (props) => {
  const navigate = useNavigate()

  const isAuth = useSelector(state => state.userData.isAuth)
  console.log(isAuth)

  debugger
  return (
    <span>
      {isAuth ?
        <span>
          <img className={style.icon} src={user} alt="User"/>
          <div className={style.dropDownContent}>
          </div>
        </span>
        :
        <span>
          <button className={style.authButton} onClick={() => {
            navigate(LOGIN_ROUTE)
          }
          }>Войти</button>
        </span>
      }

    </span>

  )
}

export default Profile