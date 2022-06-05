import React from 'react';
import style from '../Detailing.module.css';

const Types = () => {
  return (
    <div className={style.types}>
      <div className={style.typeBlock}>
        <div className={style.typeName}>Полировка</div>
      </div>
      <div className={style.typeBlock}>
        <div className={style.typeName}>Химчистка</div>
      </div>
      <div className={style.typeBlock}>
        <div className={style.typeName}>Жидкое стекло</div>
      </div>
      <div className={style.typeBlock}>
        <div className={style.typeName}>Керамика</div>
      </div>
      <div className={style.typeBlock}>
        <div className={style.typeBigName}>Восстановление кожи</div>
      </div>
      <div className={style.typeBlock}>
        <div className={style.typeBigName}>Восстановление оптики</div>
      </div>
    </div>
  );
};

export default Types;