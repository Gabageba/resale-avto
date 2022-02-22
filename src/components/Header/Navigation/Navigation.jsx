import React from 'react';
import style from './Navigation.module.css'
import {NavLink} from 'react-router-dom';

const SelectedLink = () => {
  return (
    select => select.isActive ? style.activeLink : style.navMenu
  )
}

const Navigation = (props) => {
  return (
    <li className={style.nav}>
      <NavLink to={props.link} className={SelectedLink()}>{props.name}</NavLink>
    </li>
  )
}

export default Navigation