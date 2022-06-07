import React from 'react';
import style from './ChangeCar.module.css'
import {FormattedMessage} from 'react-intl';

const ChangeCar = () => {
  return (
    <div>
      <div className={style.line}/>
      <div className={style.header}>
        <h2>01</h2>
        <p><FormattedMessage id='trade_in_change_fill' /></p>
      </div>
      <p className={style.content}><FormattedMessage id='trade_in_change_fill_content_p1' /><br/>
        <FormattedMessage id='trade_in_change_fill_content_p2' /></p>
      <div className={style.line}/>

      <div className={style.header}>
        <h2>02</h2>
        <p><FormattedMessage id='trade_in_change_rate' /></p>
      </div>
      <p className={style.content}><FormattedMessage id='trade_in_change_rate_content' /></p>
      <div className={style.line}/>

      <div className={style.header}>
        <h2>03</h2>
        <p><FormattedMessage id='trade_in_change_change' /></p>
      </div>
      <p className={style.content}><FormattedMessage id='trade_in_change_change_content' /></p>
      <div className={style.line}/>
    </div>
  )
}

export default ChangeCar