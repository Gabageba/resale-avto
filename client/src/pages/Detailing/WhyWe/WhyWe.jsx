import React from 'react';
import Reasons from './Reasons/Reasons';
import style from './WhyWe.module.css'
import whyWe from '../../../assets/whyWe.png'
import {FormattedMessage, useIntl} from 'react-intl';

const WhyWe = () => {
  const intl = useIntl()

  return (
    <div>
      <h1 className={'header-info'}><FormattedMessage id='detailing_why_head' /></h1>
      <div className={style.info}>
        <img src={whyWe} className={style.img} alt=""/>
        <div className={style.textInfo}>
          <div className={style.line}/>
          <Reasons serviceId={'01'} serviceName={intl.formatMessage({id: 'detailing_why_h1'})}
                   text={intl.formatMessage({id: 'detailing_why_t1'})}/>
          <div className={style.line}/>
          <Reasons serviceId={'02'} serviceName={intl.formatMessage({id: 'detailing_why_h2'})}
                   text={intl.formatMessage({id: 'detailing_why_t2'})}/>
          <div className={style.line}/>
          <Reasons serviceId={'03'} serviceName={intl.formatMessage({id: 'detailing_why_h3'})}
                   text={intl.formatMessage({id: 'detailing_why_t3'})}/>
          <div className={style.line}/>
        </div>
      </div>
    </div>
  );
};

export default WhyWe;