import React from 'react';
import style from './Service.module.css'

const Service = (props) => {
  return (
    <li className={style.service}>
      <h2>{props.serviceId}</h2>
      <p>{props.serviceName}</p>
    </li>
  )
}

export default Service