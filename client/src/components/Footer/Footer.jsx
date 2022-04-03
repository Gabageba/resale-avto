import React from 'react';
import style from './Footer.module.css'
import logo from './../../assets/logo.svg'
import {NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className={style.footerLine}/>
      <div className={style.information}>
        <div className={style.main}>
          <img src={logo} alt="logo"/>
          <p className={style.header}>Телефон</p>
          <p className={style.info}>+7 913 955 62-12</p>
        </div>
        <div className={style.columns}>
          <p className={style.header}>Информация</p>
          <p className={style.info}>О нас</p>
          <p className={style.info}>Контакты</p>
          <p className={style.info}>Телефон</p>
          <p className={style.header}>Политика конфидециальности</p>
        </div>
        <div className={style.columns}>
          <p className={style.header}>Услуги</p>
          <NavLink to='/catalog' className={style.info}>Авто с пробегом</NavLink>
          <NavLink to='/commission' className={style.info}>Выкуп/Комиссия</NavLink>
          <NavLink to='/trade-in' className={style.info}>TRADE-IN</NavLink>
          <NavLink to='/detailing' className={style.info}>Детейлинг</NavLink>
        </div>
      </div>

    </footer>
  )
}

export default Footer