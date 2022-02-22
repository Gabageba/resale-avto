import React from 'react';
import style from './Header.module.css'
import logo from './../../img/logo.svg'
import Navigation from './Navigation/Navigation';
import Profile from './Profile/Profile';

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} alt="Resale Avto" className={style.logo}/>
      <ul className={style.nav}>
        <Navigation name={'Главная'} link={'/main'}/>
        <Navigation name={'Каталог'} link={'/catalog'}/>
        <Navigation name={'Услуги'} link={'/services'}/>
        <Navigation name={'Контакты'} link={'/contacts'}/>
      </ul>
      <Profile />
      <div className={style.line}/>
    </header>
  )
}

export default Header