import React from 'react';
import style from './Lock.module.css'
import lock from '../../assets/lock1.png'
import {FormattedMessage} from 'react-intl';

const Lock = () => {
  return (
    <div className={style.background}>
      <div className={style.content}>
        <img src={lock} alt="" className={style.lockImg}/>
        <h3 className={style.text}><FormattedMessage id='lock_text' /></h3>
      </div>
    </div>
  );
};

export default Lock;