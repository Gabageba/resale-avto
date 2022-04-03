import React from 'react';
import style from './Header.module.css'
import logo from './../../assets/logo.svg'
import Navigation from './Navigation/Navigation';
import Profile from './Profile/Profile';
import DropDown from './DropDown/DropDown';
import {CATALOG_ROUTE, CONTACTS_ROUTE, MAIN_ROUTE} from "../../utils/const";

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} alt="Resale Avto" className={style.logo}/>
      <ul className={style.nav}>
        <Navigation name={'Главная'} link={MAIN_ROUTE}/>
        <Navigation name={'Каталог'} link={CATALOG_ROUTE}/>
        <DropDown />
        <Navigation name={'Контакты'} link={CONTACTS_ROUTE}/>
      </ul>
      <Profile />
      <div className={style.line}/>
    </header>
  )
}

export default Header