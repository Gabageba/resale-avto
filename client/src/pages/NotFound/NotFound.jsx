import React from 'react';
import style from './NotFound.module.css'
import {FormattedMessage} from 'react-intl';

const NotFound = () => {
  return (
    <div className={style.notFound}>
      <h1 className={style.errorCode}>404</h1>
      <div className={style.errorText}><FormattedMessage id='error_404_text' /></div>
    </div>
  );
};

export default NotFound;