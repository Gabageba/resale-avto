import React from 'react';
import style from './Statistic.module.css'

const Statistic = (props) => {
  return (
    <li className={style.statistic}>
      <pre><h2>{props.count}</h2></pre>
      <p>{props.name}</p>
    </li>
  )
}

export default Statistic