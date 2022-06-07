import React from 'react';
import style from './CommissionCar.module.css'
import {FormattedMessage} from 'react-intl';

const CommissionCar = () => {
  return (
    <div>
      <div className={style.line}/>
      <div className={style.header}>
        <h2>01</h2>
        <p><FormattedMessage id='commission_sell_fill' /></p>
      </div>
      <p className={style.content}><FormattedMessage id='commission_sell_fill_content_p1' /><br/>
        <FormattedMessage id='commission_sell_fill_content_p2' /></p>
      <div className={style.line}/>

      <div className={style.header}>
        <h2>02</h2>
        <p><FormattedMessage id='commission_sell_rate' /></p>
      </div>
      <p className={style.content}><FormattedMessage id='commission_sell_rate_content' /></p>
      <div className={style.line}/>

      <div className={style.header}>
        <h2>03</h2>
        <p><FormattedMessage id='commission_sell_change' /></p>
      </div>
      <p className={style.content}><FormattedMessage id='commission_sell_change_content' /></p>
      <div className={style.line}/>
    </div>
  )
}

export default CommissionCar