import React, {useState} from 'react';
import style from './DropDown.module.css'
import {NavLink} from 'react-router-dom';
import {COMMISSION_ROUTE, DETAILING_ROUTE, TRADEIN_ROUTE} from "../../../utils/const";

const DropDown = () => {

  const [icon, setIcon] = useState('expand_more')

  const SelectedLink = () => {
    return (
      select => select.isActive ? style.dropDownLinkActive : style.dropDownLink
    )
  }

  return (
    <span className={style.dropDown}>
      <div className={style.btn}>
        <button className={style.dropBtn}>Услуги</button>
        <span className="material-icons-outlined">{icon}</span>
      </div>

      <div className={style.dropDownContent}>
        <NavLink to={TRADEIN_ROUTE} className={SelectedLink()}>Трейд-ин</NavLink>
        <NavLink to={COMMISSION_ROUTE} className={SelectedLink()}>Комиссия</NavLink>
        <NavLink to={DETAILING_ROUTE} className={SelectedLink()}>Детейлинг</NavLink>
      </div>
    </span>
  )
}

export default DropDown