import React from 'react';
import style from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={style.notFound}>
      <h1 className={style.errorCode}>404</h1>
      <div className={style.errorText}>Страница по данному адресу не найдена</div>
    </div>
  );
};

export default NotFound;