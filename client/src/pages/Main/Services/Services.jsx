import React from 'react';
import style from './Services.module.css'
import Service from './Service/Service';
import {FormattedMessage} from 'react-intl';

const Services = () => {
  return (
    <div className={style.services}>
      <h1 className="header-info"><FormattedMessage id='main_serv_title' /></h1>
      <ul>
        <div className="line"/>
        <Service serviceName={<FormattedMessage id='main_serv_text_1' />} serviceId={'01'}/>
        <div className="line"/>
        <Service serviceName={'Trade-In'} serviceId={'02'}/>
        <div className="line"/>
        <Service serviceName={<FormattedMessage id='main_serv_text_3' />} serviceId={'03'}/>
        <div className="line"/>
      </ul>
    </div>
  )
}

export default Services