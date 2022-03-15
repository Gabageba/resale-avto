import React from 'react';
import style from './ContactForm.module.css'

const ContactForm = () => {
  return (
    <div>
      <p className={style.info}>Персональный помощник свяжется с вами в течении 30 минут</p>
      <input type="text" className={style.entryField} placeholder='ФИО'/>
      <input type="text" className={style.entryField} placeholder='Номер телефона'/>
      <button className={style.sendButton}>Отправить</button>
    </div>
  )
}

export default ContactForm