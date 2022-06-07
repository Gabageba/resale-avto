import React from 'react';
import style from './Header.module.css'
import logo from './../../assets/logo.svg'
import Navigation from './Navigation/Navigation';
import Profile from './Profile/Profile';
import DropDown from './DropDown/DropDown';
import {CATALOG_ROUTE, CONTACTS_ROUTE, MAIN_ROUTE} from "../../utils/const";
import {useNavigate} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import Language from './Language/Language';

const Header = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className={style.background}></div>
      <header className={style.header}>
        <img src={logo} alt="Resale Avto" className={style.logo} onClick={() => navigate(MAIN_ROUTE)}/>
        <ul className={style.nav}>
          <Navigation name={<FormattedMessage id='header_main' />} link={MAIN_ROUTE}/>
          <Navigation name={<FormattedMessage id='header_catalog' />} link={CATALOG_ROUTE}/>
          <DropDown />
          <Navigation name={<FormattedMessage id='header_contacts' />} link={CONTACTS_ROUTE}/>
        </ul>
        <Profile/>
        <Language/>
        <div className={style.line}/>
      </header>
    </div>

  )
}

export default Header