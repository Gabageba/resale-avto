import React from 'react';
import dealershipPhoto from '../../../assets/img1.jpg'
import style from './AboutUs.module.css'
import Statistic from './Statistic/Statistic';
import {FormattedMessage} from 'react-intl';

const AboutUs = () => {
  return (
    <div className={style.aboutUs}>
      <div>
        <h1 className="header-info"><FormattedMessage id='main_about_title' /></h1>
        <div className="line"/>
        <p className={style.info}>
          <FormattedMessage id='main_about_text_p1' />
          <br/>
          <br/>
          <FormattedMessage id='main_about_text_p2' />
        </p>
        <div className="line"/>
        <ul className={style.statistics}>
          <Statistic name={ <FormattedMessage id='main_about_statistics_sell' />} count={'1 345'}/>
          <Statistic name={ <FormattedMessage id='main_about_statistics_customers' />} count={'1000+'}/>
        </ul>
      </div>
      <img className={style.dealership} src={dealershipPhoto} alt="Dealership"/>

    </div>
  )
}

export default AboutUs