import React from 'react';
import style from './Commission.module.css'
import SendForm from '../../components/SendForm/SendForm';
import CommissionCar from './CommissionCar/CommissionCar';
import ContactForm from '../../components/ContactFrom/ContactForm';
import Footer from "../../components/Footer/Footer";

const Commission = () => {
  return (
    <div>
      <h1 className='header-info'>Авто на комиссию</h1>
      <SendForm type={'commission'}/>
      <h1 className='header-info'>Продайте ваше авто</h1>
      <CommissionCar/>
      <h1 className='header-info'>Остались вопросы?</h1>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Commission