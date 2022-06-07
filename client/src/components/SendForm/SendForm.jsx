import React, {useEffect, useState} from 'react';
import style from './SendForm.module.css'
import {createApplication} from '../../http/applicationAPI';
import ErrorPopUp from '../ErrorPopUp/ErrorPopUp';
import {FormattedMessage, useIntl} from 'react-intl';

const SendForm = ({type}) => {
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [millage, setMillage] = useState('')
  const [year, setYear] = useState('')
  const [price, setPrice] = useState('')
  const [number, setNumber] = useState('')
  const [errorActive, setErrorActive] = useState(false)
  const intl = useIntl()

  useEffect(() => {
    if (type === 'detailing') {
      setPrice(0)
      setMillage(0)
    }
  }, [])

  const onSendClick = () => {
    if (brand && model && millage && year && price && number) {
      if (type === 'trade-in') {
        createApplication(year, millage, number, brand, model, price, 1).then(() => {
          clear()
        })
      } else if (type === 'commission') {
        createApplication(year, millage, number, brand, model, price, 2).then(() => {
          clear()
        })
      }
    } else if (brand && model && year && number) {
      if (type === 'detailing') {
        createApplication(year, millage, number, brand, model, price, 3).then(() => {
          clear()
        })
      } else {
        setErrorActive(true)
      }
    } else {
      setErrorActive(true)
    }
  }

  const clear = () => {
    setBrand('')
    setModel('')
    setMillage('')
    setYear('')
    setPrice('')
    setNumber('')
  }

  return (
    <div>
      <ErrorPopUp errorText={intl.formatMessage({id: 'send_form_error'})} setActive={setErrorActive} active={errorActive}/>
      <div className={style.sendForm}>
        <input type="text" className={style.selectorLong} placeholder={intl.formatMessage({id: 'send_form_brand'})} onChange={e => setBrand(e.target.value)} value={brand}/>
        <input type="text" className={style.selectorLong} placeholder={intl.formatMessage({id: 'send_form_model'})} onChange={e => setModel(e.target.value)} value={model}/>
        {type === 'trade-in' || type === 'commission' ?
          <input type="number" className={style.selectorLong} placeholder={intl.formatMessage({id: 'send_form_millage'})} onChange={e => setMillage(e.target.value)} value={millage}/>
          : null
        }

        <input type="number" className={style.selectorLong} placeholder={intl.formatMessage({id: 'send_form_year'})} onChange={e => setYear(e.target.value)} value={year}/>
        {type === 'trade-in' || type === 'commission' ?
          <input type="number" className={style.selectorLong} placeholder={intl.formatMessage({id: 'send_form_price'})} onChange={e => setPrice(e.target.value)} value={price}/>
          : null
        }

        <input type="number" className={style.selectorLong} placeholder={intl.formatMessage({id: 'send_form_phone'})} onChange={e => setNumber(e.target.value)} value={number}/>
        <button className={style.sendButton} onClick={onSendClick}><FormattedMessage id='send_form_button' /></button>
      </div>
    </div>
  )
}

export default SendForm