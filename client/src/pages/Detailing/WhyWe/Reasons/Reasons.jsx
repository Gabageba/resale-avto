import React from 'react';
import style from './Reasons.module.css'

const Reasons = ({serviceId, serviceName, text}) => {
  return (
    <div>
      <div className={style.reasons}>
        <h2>{serviceId}</h2>
        <p>{serviceName}</p>
      </div>
      <div className={style.text}>{text}</div>
    </div>
  );
};

export default Reasons;