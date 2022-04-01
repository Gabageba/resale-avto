import React from 'react';
import style from './Commission.module.css'
import SendForm from '../SendForm/SendForm';
import CommissionCar from './CommissionCar/CommissionCar';
import ContactForm from '../ContactFrom/ContactForm';
import Footer from '../../Footer/Footer';

const Commission = () => {
  return (
    <div>
      <h1 className='header-info'>Авто на комиссию</h1>
      <SendForm/>
      <h1 className='header-info'>Продайте ваше авто</h1>
      <CommissionCar/>
      <h1 className='header-info'>Остались вопросы?</h1>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Commission