import React from 'react';
import style from './ErrorPage.module.css'

const ErrorPage = () => {
  return (
    <div className={style.error}>
      <div className={style.number}>404</div>
      <p className={style.errorText}>Данной страницы не существует</p>
    </div>
  );
};

export default ErrorPage;