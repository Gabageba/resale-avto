import React from 'react';
import style from './Banner.module.css'
import {FormattedMessage} from 'react-intl';

const Banner = () => {
  return (
    <div className={style.banner}>
        <h1 className={style.fill}><FormattedMessage id='main_banner_tittle' /></h1>
      <h1 className={style.stroke}>Resale Avto</h1>
      <p className={style.slogan}><FormattedMessage id='main_banner_slogan' /></p>
    </div>
  )
}

export default Banner