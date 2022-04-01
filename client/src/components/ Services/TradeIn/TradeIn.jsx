import React from 'react';
import style from './TradeIn.module.css'
import SendForm from '../SendForm/SendForm';
import ChangeCar from './ChangeCar/ChangeCar';
import Footer from '../../Footer/Footer';
import ContactForm from '../ContactFrom/ContactForm';

const TradeIn = () => {
  return (
    <div>
      <h1 className='header-info'>Трейд-ин</h1>
      <SendForm/>
      <h1 className='header-info'>Обменяйте ваше авто</h1>
      <ChangeCar/>
      <h1 className='header-info'>Остались вопросы?</h1>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default TradeIn