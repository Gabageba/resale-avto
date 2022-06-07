import React from 'react';
import style from './Footer.module.css'
import logo from './../../assets/logo.svg'
import {NavLink, useNavigate} from 'react-router-dom';
import {CONTACTS_ROUTE, REFERENCE_ROUTER} from '../../utils/const';
import {FormattedMessage} from 'react-intl';

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer>
      <div className={style.footerLine}/>
      <div className={style.information}>
        <div className={style.main}>
          <img src={logo} alt="logo"/>
          <p className={style.header}><FormattedMessage id='footer_phone' /></p>
          <a href="tel: +891399556212" className={style.info}>+7 913 955 62-12</a>
          {/*<p className={style.info}></p>*/}
        </div>
        <div className={style.columns}>
          <p className={style.header}><FormattedMessage id='footer_info' /></p>
          <p className={style.info} onClick={() => navigate(REFERENCE_ROUTER)}><FormattedMessage id='footer_about_us' /></p>
          <p className={style.info} onClick={() => navigate(CONTACTS_ROUTE)}><FormattedMessage id='footer_contacts' /></p>
          {/*<p className={style.info}>Телефон</p>*/}
          <p className={style.header}><FormattedMessage id='footer_privacy' /></p>
        </div>
        <div className={style.columns}>
          <p className={style.header}><FormattedMessage id='footer_services' /></p>
          {/*<NavLink to='/catalog' className={style.info}>Авто с пробегом</NavLink>*/}
          <NavLink to='/commission' className={style.info}><FormattedMessage id='footer_commission' /></NavLink>
          <NavLink to='/trade-in' className={style.info}>TRADE-IN</NavLink>
          <NavLink to='/detailing' className={style.info}><FormattedMessage id='footer_detailing' /></NavLink>
        </div>
      </div>

    </footer>
  )
}

export default Footer