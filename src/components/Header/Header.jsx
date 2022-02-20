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
        <Navigation name={'Главная'} link={'#'}/>
        <Navigation name={'Каталог'} link={'#'}/>
        <Navigation name={'Услуги'} link={'#'}/>
        <Navigation name={'Контакты'} link={'#'}/>
      </ul>
      <Profile />
      <div className={style.line}/>
    </header>
  )
}

export default Header