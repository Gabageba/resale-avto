import React from 'react';
import style from './Lock.module.css'
import lock from '../../assets/lock1.png'

const Lock = () => {
  return (
    <div className={style.background}>
      <div className={style.content}>
        <img src={lock} alt="" className={style.lockImg}/>
        <h3 className={style.text}>Чтобы использовать возможности авторизированного пользователя подтвердите почту </h3>
      </div>
    </div>
  );
};

export default Lock;