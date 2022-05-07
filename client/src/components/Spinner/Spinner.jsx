import React from 'react';
import style from './Spinner.module.css'

const Spinner = () => {
  return (
    <div className={style.spinner}>
      <div className={style.ring}>Loading
        <span></span>
      </div>
    </div>
  );
};

export default Spinner;