import React, {useState} from 'react';
import style from './Auth.module.css'
import {LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from '../../utils/const';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {login, registration} from '../../http/userAPI';
import {useDispatch} from 'react-redux';
import {setIsAuthAC, setUserAC} from '../../redux/userReducer';
import ErrorPopUp from '../../components/ErrorPopUp/ErrorPopUp';
import validator from 'validator'

const Auth = () => {

  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [name, setName] = useState('')
  const [loginError, setLoginError] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [emptyLogin, setEmptyLogin] = useState(false)
  const [emptyName, setEmptyName] = useState(false)
  const [emptyPassword, setEmptyPassword] = useState(false)
  const [emptyRepeatPassword, setEmptyRepeatPassword] = useState(false)

  const [passwordInputType, setPasswordInputType] = useState('password')
  const [passwordVisible, setPasswordVisible] = useState('visibility_off')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const visibleChange = () => {
    if (passwordInputType === 'password') {
      setPasswordInputType('text')
      setPasswordVisible('visibility')
    } else {
      setPasswordInputType('password')
      setPasswordVisible('visibility_off')
    }
  }

  const validatePassword = (value) => {
    return !!validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 0
    });
  }

  const clear = () => {
    setEmptyPassword(false)
    setEmptyName(false)
    setEmptyRepeatPassword(false)
    setEmptyLogin(false)
    setName('')
    setEmail('')
    setPassword('')
    setPasswordRepeat('')
    setPasswordInputType('password')
    setPasswordVisible('visibility_off')
  }

  const validateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(text) !== false;
  }

  const loginClick = async () => {
    try {
      let data
      if (isLogin) {
        if (email === '' || password === '') {
          if (email === '') {
            setEmptyLogin(true)
          }
          if (password === '') {
            setEmptyPassword(true)
          }
          setErrorText('Пожалуйста, заполните все поля выделенные красным')
          setLoginError(true)
        } else {

          data = await login(email, password)
          dispatch(setUserAC(data))
          dispatch(setIsAuthAC(true))
          navigate(MAIN_ROUTE)
        }
      } else {
        if (email === '' || password === '' || passwordRepeat === '' || name === '') {
          if (email === '') {
            setEmptyLogin(true)
          }
          if (password === '') {
            setEmptyPassword(true)
          }
          if (name === '') {
            setEmptyName(true)
          }
          if (passwordRepeat === '') {
            setEmptyRepeatPassword(true)
          }
          setErrorText('Пожалуйста, заполните все поля выделенные красным')
          setLoginError(true)
        } else {
         if (password !== passwordRepeat) {
           setErrorText('Пароли не совпадают')
           setLoginError(true)
         } else {
           if (validatePassword(password)){
             if (validateEmail(email)) {
               data = await registration(email, password, name)
               dispatch(setUserAC(data))
               dispatch(setIsAuthAC(true))
               navigate(MAIN_ROUTE)
             } else {
               setErrorText('Такой почты не существует')
               setLoginError(true)
             }
           } else {
             setErrorText('Ваш пароль не соответствует минимальным требованиям безопасности.\n Требования:\n Минимальная длина - 8 символов,\n Минимум 1 строчная и 1 заглавная буква,\n Минимум 1 цифра')
             setLoginError(true)
           }
         }
          // data = await registration(email, password, name)
        }
      }



    } catch (e) {
      setErrorText(e.response.data.message)
      setLoginError(true)
      setPassword('')
      setPasswordRepeat('')
    }
  }

  return (
    <div>
      <ErrorPopUp active={loginError} setActive={setLoginError} errorText={errorText}/>
      <div className={isLogin ? style.loginForm : style.registrationForm}>
        <h1 className={style.header}>{isLogin ? 'Вход' : 'Регистрация'}</h1>
        {isLogin ?
          <span></span>
          : <input type="text"
                   placeholder="Имя"
                   value={name}
                   className={emptyName ? style.authInputError : style.authInput}
                   onChange={e => {
                     setName(e.target.value)
                     setEmptyName(false)
                   }}/>
        }
        <input type="email"
               value={email}
               placeholder="Email"
               className={emptyLogin ? style.authInputError : style.authInput}
               onChange={e => {
                 setEmail(e.target.value)
                 setEmptyLogin(false)
               }}/>
        <div className={style.password}>
          <input type={passwordInputType}
                 placeholder="Пароль"
                 className={emptyPassword ? style.authInputError : style.authInput}
                 value={password}
                 onChange={e => {
                   setPassword(e.target.value)
                   setEmptyPassword(false)
                 }}/>
          <div className={style.eye} onClick={visibleChange}>
            <span className="material-icons-outlined">{passwordVisible}</span>
          </div>
        </div>
        {isLogin ?
          <span></span>
          : <input type={passwordInputType} placeholder="Повторите пароль"
                   className={emptyRepeatPassword ? style.authInputError : style.authInput}
                   value={passwordRepeat}
                   onChange={e => {
                     setPasswordRepeat(e.target.value)
                     setEmptyRepeatPassword(false)
                   }}/>
        }

        <div>
          {isLogin ?
            <div className={style.link}>Нет аккаунта? <NavLink className={style.navigateLink}
                                                               to={REGISTRATION_ROUTE}
                                                               onClick={clear}>Зарегистрируйся</NavLink></div>
            : <div className={style.link}>Есть аккаунт? <NavLink className={style.navigateLink}
                                                                 to={LOGIN_ROUTE}
                                                                 onClick={clear}>Войди</NavLink></div>
          }
        </div>
        {/*<div className={style.error}>Неверное имя пользователя или пароль</div>*/}
        <button className={style.sendButton} onClick={loginClick}>{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
      </div>
    </div>

  )
}

export default Auth;