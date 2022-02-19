import React from 'react';
import style from './Navigation.module.css'

const Navigation = (props) => {
  return (
    <li className={style.nav}>
      <a href={props.link} className={style.navMenu}>{props.name}</a>
    </li>
  )
}

export default Navigation