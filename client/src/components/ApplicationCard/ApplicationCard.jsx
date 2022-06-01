import React, {useEffect, useState} from 'react';
import style from './ApplicationCard.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {deleteApplication} from '../../http/applicationAPI';
import {
  setApplicationsAC,
  setCurrentPageApplicationAC,
  setTotalCountApplicationAC
} from '../../redux/applicationsReducer';

const ApplicationCard = ({applicationData}) => {

  const fmtMillage = new Intl.NumberFormat('ru-RU').format(applicationData.millage);
  const fmtPrice =  new Intl.NumberFormat('ru-RU').format(applicationData.price);
  const types =  useSelector(state => state.application.applicationTypes)
  const limit =  useSelector(state => state.application.limit)
  const [currentType, setCurrentType] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    types.map(t => applicationData.applicationTypeId === t.id ? setCurrentType(t.name): null)
  }, [])

  const onDeleteClick = () => {
    deleteApplication(applicationData.id, limit, 1).then(data => {
      dispatch(setApplicationsAC(data.rows))
      dispatch(setTotalCountApplicationAC(data.count))
      dispatch(setCurrentPageApplicationAC(1))
    })
  }

  return (
    <div className={style.applicationCard}>
      <div className={style.type}>{currentType}</div>
      <div className={style.info}>
        <div className={style.carInfo}>
          <div className={style.spec}>
            <div className={style.title} >Марка: </div>
            <div className={style.text}>{applicationData.brand}</div>
          </div>
          <div className={style.spec}>
            <div  className={style.title}>Модель: </div>
            <div className={style.text}>{applicationData.model}</div>
          </div>
          <div className={style.spec}>
            <div  className={style.title}>Пробег: </div>
            <div className={style.text}>{fmtMillage}</div>
          </div >
          <div className={style.spec}>
            <div  className={style.title}>Год: </div>
            <div className={style.text}>{applicationData.year}</div>
          </div>
        </div>
        <div className={style.userInfo}>
          <div className={style.spec}>
            <div className={style.title} >Желаемая цена: </div>
            <div className={style.text}>{fmtPrice} ₽</div>
          </div>
          <div className={style.spec}>
            <div className={style.title} >Номер телефона: </div>
            <div className={style.text}>{applicationData.phone_number}</div>
          </div>
        </div>
        <button className={style.delete} onClick={onDeleteClick}>Удалить заявку</button>
      </div>
    </div>
  );
};

export default ApplicationCard;