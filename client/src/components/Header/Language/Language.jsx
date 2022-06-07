import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import style from './Language.module.css'
import {setLocaleAC} from '../../../redux/userReducer';
import {LOCALES} from '../../../i18n/locales';

const Language = () => {
  const locale = useSelector(state => state.userData.locale)
  const dispatch = useDispatch()


  return (
    <div>
      {locale === 'en-US' ?
        <div className={style.lang} onClick={() => dispatch(setLocaleAC(LOCALES.RUSSIAN))}>EN</div> :
        <div className={style.lang} onClick={() => dispatch(setLocaleAC(LOCALES.ENGLISH))}>RU</div>
      }
    </div>
  );
};

export default Language;