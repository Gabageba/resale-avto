import React from 'react';
import dealershipPhoto from '../../../img/img1.jpg'
import style from './AboutUs.module.css'
import Statistic from './Statistic/Statistic';

const AboutUs = () => {
  return (
    <div className={style.aboutUs}>
      <div>
        <h1 className="header-info">О нас</h1>
        <div className="line"/>
        <p className={style.info}>
          Мы предлагаем самые выгодные предложения и большой выбор бу
          автомобилей на рынке.
          <br/>
          <br/>
          Мы продаем только автомобили без сомнительной истории, чистые
          юридически и не имеющие никаких серьезных недостатков
        </p>
        <div className="line"/>
        <ul className={style.statistics}>
          <Statistic name={'Автомобилей продано'} count={'1 345'}/>
          <Statistic name={'Довольных покупателей'} count={'1000+'}/>
        </ul>
      </div>
      <img className={style.dealership} src={dealershipPhoto} alt="Dealership"/>
      
    </div>
  )
}

export default AboutUs