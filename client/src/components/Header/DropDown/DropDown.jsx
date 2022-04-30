import React from 'react';
import style from './DropDown.module.css'
import {NavLink} from 'react-router-dom';
import {COMMISSION_ROUTE, DETAILING_ROUTE, TRADEIN_ROUTE} from "../../../utils/const";

const DropDown = () => {
  return (
    <span className={style.dropDown}>
      <button className={style.dropBtn}>Услуги</button>
      <div className={style.dropDownContent}>
        <NavLink to={TRADEIN_ROUTE} className={style.dropDownLink}>Трейд-ин</NavLink>
        <div className={style.line}/>
        <NavLink to={COMMISSION_ROUTE} className={style.dropDownLink}>Комиссия</NavLink>
        <div className={style.line}/>
        <NavLink to={DETAILING_ROUTE} className={style.dropDownLink}>Детейлинг</NavLink>
      </div>
    </span>
  )
}

export default DropDown