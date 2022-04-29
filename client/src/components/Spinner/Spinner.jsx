import React from 'react';
import style from './Spinner.module.css'

const Spinner = () => {
  return (
    <div className={style.ring}>Loading
      <span></span>
    </div>
  );
};

export default Spinner;