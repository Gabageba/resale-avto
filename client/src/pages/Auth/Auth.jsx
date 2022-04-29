import React, {useState} from 'react';
import style from './Auth.module.css'
import {LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from '../../utils/const';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {login, registration} from '../../http/userAPI';
import {useDispatch, useSelector} from 'react-redux';
import {setIsAuthAC, setUserAC} from '../../redux/userReducer';

const Auth = (props) => {

  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const user = useSelector(state => state.userData.user)
  const navigate = useNavigate()

  const loginClick = async () => {
    try {
      let data
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password, name)
      }
      dispatch(setUserAC(user))
      dispatch(setIsAuthAC(true))
      navigate(MAIN_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <div className={isLogin ? style.loginForm : style.registrationForm}>
      <h1 className={style.header}>{isLogin ? 'Вход' : 'Регистрация'}</h1>
      {isLogin ?
        <span></span>
        : <input type="text"
                 placeholder='Имя'
                 className={style.authInput}
                 onChange={e => setName(e.target.value)}/>
      }
      <input type="email"
             placeholder='Email'
             className={style.authInput}
             onChange={e => setEmail(e.target.value)}/>
      <input type="password"
             placeholder='Пароль'
             className={style.authInput}
             onChange={e => setPassword(e.target.value)}/>
      {isLogin ?
        <span></span>
        : <input type="text" placeholder='Повторите пароль' className={style.authInput}/>
      }

      <div>
        {isLogin ?
          <div className={style.link}>Нет аккаунта? <NavLink className={style.navigateLink} to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink></div>
          :  <div className={style.link}>Есть аккаунт? <NavLink className={style.navigateLink} to={LOGIN_ROUTE}>Войди</NavLink></div>
        }
      </div>
      {/*<div className={style.error}>Неверное имя пользователя или пароль</div>*/}
      <button className={style.sendButton} onClick={loginClick}>{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
    </div>
  )
}

export default Auth;