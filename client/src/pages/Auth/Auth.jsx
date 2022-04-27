import React from 'react';
import style from './Auth.module.css'
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/const";
import {NavLink} from 'react-router-dom';

const Auth = (props) => {

  let isLogin = true;

  return (
    <div className={isLogin ? style.loginForm : style.registrationForm}>
      <h1 className={style.header}>{isLogin ? 'Вход' : 'Регистрация'}</h1>
      {isLogin ?
        <span></span>
        : <input type="text" placeholder='Имя' className={style.authInput}/>
      }
      <input type="email" placeholder='Email' className={style.authInput} />
      <input type="password" placeholder='Пароль' className={style.authInput}/>
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
      <button className={style.sendButton}>{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
    </div>
  )
}

export default Auth;