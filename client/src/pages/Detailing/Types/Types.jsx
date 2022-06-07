import React from 'react';
import style from '../Detailing.module.css';
import {FormattedMessage} from 'react-intl';

const Types = () => {
  return (
    <div className={style.types}>
      <div className={style.typeBlock}>
        <div className={style.typeName}><FormattedMessage id='detailing_types_polishing' /></div>
      </div>
      <div className={style.typeBlock}>
        <div className={style.typeName}><FormattedMessage id='detailing_types_dry_cleaning' /></div>
      </div>
      <div className={style.typeBlock}>
        <div className={style.typeName}><FormattedMessage id='detailing_types_glass' /></div>
      </div>
      <div className={style.typeBlock}>
        <div className={style.typeName}><FormattedMessage id='detailing_types_ceramics' /></div>
      </div>
      <div className={style.typeBlock}>
        <div className={style.typeBigName}><FormattedMessage id='detailing_types_skin' /></div>
      </div>
      <div className={style.typeBlock}>
        <div className={style.typeBigName}><FormattedMessage id='detailing_types_optics' /></div>
      </div>
    </div>
  );
};

export default Types;