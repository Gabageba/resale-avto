import React from 'react';
import style from './Dropdown.module.css'
import {NavLink} from 'react-router-dom';

const SelectedLink = () => {
  return (
    select => select.isActive ? style.activeLink : style.dropDownContent
  )
}

const DropDown = () => {
  return (
    <span className={style.dropDown}>
      <button className={style.dropBtn}>Услуги</button>
      <div className={style.dropDownContent}>
          {/*<NavLink to='/trade-in' className={SelectedLink()}>Трейд-ин</NavLink>*/}
          {/*<NavLink to='/commission' className={SelectedLink()}>Комиссия</NavLink>*/}
          {/*<NavLink to='/detailing' className={SelectedLink()}>Детейлинг</NavLink>*/}

          <NavLink to='/trade-in' className={style.dropDownLink}>Трейд-ин</NavLink>
          <div className={style.line}/>
          <NavLink to='/commission' className={style.dropDownLink}>Комиссия</NavLink>
          <div className={style.line}/>
          <NavLink to='/detailing' className={style.dropDownLink}>Детейлинг</NavLink>

      </div>
    </span>
  )
}

export default DropDown