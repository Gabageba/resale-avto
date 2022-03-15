import React from 'react';
import style from './Services.module.css'
import Service from './Service/Service';

const Services = () => {
  return (
    <div className={style.services}>
      <h1 className="header-info">Услуги</h1>
      <ul>
        <div className="line"/>
        <Service serviceName={'Продажа авто'} serviceId={'01'}/>
        <div className="line"/>
        <Service serviceName={'Trade-In'} serviceId={'02'}/>
        <div className="line"/>
        <Service serviceName={'Авто на комиссию'} serviceId={'03'}/>
        <div className="line"/>
      </ul>
    </div>
  )
}

export default Services