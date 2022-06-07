import React from 'react';
import style from './Detailing.module.css'
import detailing from '../../assets/detailing4.png'
import logo from '../../assets/logo.svg'
import Footer from '../../components/Footer/Footer';
import Types from './Types/Types';
import WhyWe from './WhyWe/WhyWe';
import PriceList from './PriceList/PriceList';
import SendForm from '../../components/SendForm/SendForm';
import {FormattedMessage} from 'react-intl';

const Detailing = () => {
  return (
    <div>
      <h1 className={style.header}><FormattedMessage id='detailing_header' /></h1>
      <div className={style.head}>
        <img className={style.img} src={detailing} alt=""/>
        <div className={style.icon}>
          <img src={logo} className={style.logo} alt=""/>
        </div>
        <Types/>
        <WhyWe/>
        <PriceList/>
        <h1 className={'header-info'}><FormattedMessage id='detailing_application' /></h1>
        <SendForm type={'detailing'}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Detailing