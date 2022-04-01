import React from 'react';
import style from './SendForm.module.css'

const SendForm = () => {
  return (
    <div className={style.sendForm}>
      <input type="text" className={style.selectorLong} placeholder='Марка'/>
      <input type="text" className={style.selectorLong} placeholder='Модель'/>
      <input type="text" className={style.selectorLong} placeholder='Пробег'/>
      <input type="text" className={style.selectorLong} placeholder='Год выпуска'/>
      <input type="text" className={style.selectorLong} placeholder='Желаемая цена'/>
      <input type="text" className={style.selectorLong} placeholder='Номер телефона'/>

      <button className={style.sendButton}>Отправить</button>
    </div>
  )
}

export default SendForm