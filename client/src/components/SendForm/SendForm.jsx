import React, {useState} from 'react';
import style from './SendForm.module.css'
import {createApplication} from '../../http/applicationAPI';
import ErrorPopUp from '../ErrorPopUp/ErrorPopUp';

const SendForm = ({type}) => {
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [millage, setMillage] = useState('')
  const [year, setYear] = useState('')
  const [price, setPrice] = useState('')
  const [number, setNumber] = useState('')
  const [errorActive, setErrorActive] = useState(false)

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
      } else if (type === 'detailing') {
        createApplication(year, millage, number, brand, model, price, 3).then(() => {
          clear()
        })
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
      <ErrorPopUp errorText={'Пожалуйста, заполните все поля'} setActive={setErrorActive} active={errorActive}/>
      <div className={style.sendForm}>
        <input type="text" className={style.selectorLong} placeholder='Марка' onChange={e => setBrand(e.target.value)} value={brand}/>
        <input type="text" className={style.selectorLong} placeholder='Модель' onChange={e => setModel(e.target.value)} value={model}/>
        <input type="number" className={style.selectorLong} placeholder='Пробег' onChange={e => setMillage(e.target.value)} value={millage}/>
        <input type="number" className={style.selectorLong} placeholder='Год выпуска' onChange={e => setYear(e.target.value)} value={year}/>
        <input type="number" className={style.selectorLong} placeholder='Желаемая цена' onChange={e => setPrice(e.target.value)} value={price}/>
        <input type="number" className={style.selectorLong} placeholder='Номер телефона' onChange={e => setNumber(e.target.value)} value={number}/>
        <button className={style.sendButton} onClick={onSendClick}>Отправить</button>
      </div>
    </div>
  )
}

export default SendForm