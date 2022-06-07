import React, {useEffect, useState} from 'react';
import style from './ApplicationCard.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {deleteApplication} from '../../http/applicationAPI';
import {
  setApplicationsAC,
  setCurrentPageApplicationAC,
  setTotalCountApplicationAC
} from '../../redux/applicationsReducer';
import {FormattedMessage, useIntl} from 'react-intl';

const ApplicationCard = ({applicationData}) => {

  const fmtMillage = new Intl.NumberFormat('ru-RU').format(applicationData.millage);
  const fmtPrice =  new Intl.NumberFormat('ru-RU').format(applicationData.price);
  const types =  useSelector(state => state.application.applicationTypes)
  const limit =  useSelector(state => state.application.limit)
  const [currentType, setCurrentType] = useState('')
  const [type, setType] = useState('')
  const dispatch = useDispatch()
  const intl = useIntl()

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

  useEffect(() => {
    if (currentType === 'trade-in') {
      setType(intl.formatMessage({id: 'application_type_trade'}))
    } else if (currentType === 'авто на комиссию') {
      setType(intl.formatMessage({id: 'application_type_commission'}))
    } else if (currentType === 'детейлинг') {
      setType(intl.formatMessage({id: 'application_type_detailing'}))
    }
  }, [currentType])

  return (
    <div className={style.applicationCard}>
      <div className={style.type}>{type}</div>
      <div className={style.info}>
        <div className={style.carInfo}>
          <div className={style.spec}>
            <div className={style.title} ><FormattedMessage id='send_form_brand' />: </div>
            <div className={style.text}>{applicationData.brand}</div>
          </div>
          <div className={style.spec}>
            <div  className={style.title}><FormattedMessage id='send_form_model' />: </div>
            <div className={style.text}>{applicationData.model}</div>
          </div>
          <div className={style.spec}>
            <div  className={style.title}><FormattedMessage id='send_form_year' />: </div>
            <div className={style.text}>{applicationData.year}</div>
          </div>
          {
            currentType !== 'детейлинг' ?
              <div className={style.spec}>
                <div  className={style.title}><FormattedMessage id='send_form_millage' />: </div>
                <div className={style.text}>{fmtMillage}</div>
              </div >
              : null
          }
        </div>

        <div className={style.userInfo}>
          {
            currentType !== 'детейлинг' ?
              <div className={style.spec}>
                <div className={style.title} ><FormattedMessage id='send_form_price' />: </div>
                <div className={style.text}>{fmtPrice} ₽</div>
              </div> : null
          }
          <div className={style.spec}>
            <div className={style.title} ><FormattedMessage id='send_form_phone' />: </div>
            <div className={style.text}>{applicationData.phone_number}</div>
          </div>
        </div>
        <button className={style.delete} onClick={onDeleteClick}><FormattedMessage id='application_delete_button' /></button>
      </div>
    </div>
  );
};

export default ApplicationCard;