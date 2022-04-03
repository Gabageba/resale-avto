import React from 'react';
import style from './CommissionCar.module.css'

const CommissionCar = () => {
  return (
    <div>
      <div className={style.line}/>
      <div className={style.header}>
        <h2>01</h2>
        <p>Заполните заявку на сайте</p>
      </div>
      <p className={style.content}>Форма заявки расположена выше, ее заполнение займет 1-2 мин. <br/>
        После заполнения в течении 30 минут с вами свяжется наш менеджер</p>
      <div className={style.line}/>

      <div className={style.header}>
        <h2>02</h2>
        <p>Мы выставим ваше авто на продажу</p>
      </div>
      <p className={style.content}>Мы выставим ваш автомобиль на продажу от лица нашего автосалона, за указанную цену,
        20% от суммы продажи мы забираем себе</p>
      <div className={style.line}/>

      <div className={style.header}>
        <h2>03</h2>
        <p>Делать ничего не прийдется </p>
      </div>
      <p className={style.content}>Мы сделаем всю работу за вас. Все что вам нужно, это привезти автомобиль в наш салон,
        а дальше это станет заботой наших сотрудников</p>
      <div className={style.line}/>
    </div>
  )
}

export default CommissionCar