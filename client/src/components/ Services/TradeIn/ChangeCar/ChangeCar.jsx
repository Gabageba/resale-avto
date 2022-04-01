import React from 'react';
import style from './ChangeCar.module.css'

const ChangeCar = () => {
  return (
    <div>
      <div className={style.line}/>
      <div className={style.header}>
        <h2>01</h2>
        <p>Заполните заявку на сайте</p>
      </div>
      <p className={style.content}>Форма заявки расположена выше, ее заполнение займет 1-2 мин. <br/>
        После заполнения заявки на сайте вы получите скидку на новый автомобиль!</p>
      <div className={style.line}/>

      <div className={style.header}>
        <h2>02</h2>
        <p>Мы выгодно оценим ваше авто</p>
      </div>
      <p className={style.content}>Разницу в стоимости старого и нового авто можно будет оплатить наличными в кассу салона /
        оформить автокредит / в рассрочку</p>
      <div className={style.line}/>

      <div className={style.header}>
        <h2>03</h2>
        <p>Обменяйте старое авто на новое</p>
      </div>
      <p className={style.content}>Мы можем поставить Ваш новый автомобиль на учёт в ГИБДД, и установить необходимое дополнительное оборудование</p>
      <div className={style.line}/>
    </div>
  )
}

export default ChangeCar