import React from 'react';
import style from './Service.module.css'

const Service = (props) => {
  return (
    <div className={style.service}>
      <h2>{props.serviceId}</h2>
      <p>{props.serviceName}</p>
    </div>
  )
}

export default Service