import React from 'react';
import style from './InputSpinner.module.css'

const InputSpinner = () => {
  return (
    <div className={style.spinner}>
      <div className={style.ring}>
      </div>
    </div>
  );
};

export default InputSpinner;