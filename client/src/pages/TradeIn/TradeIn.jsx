import React from 'react';
import style from './TradeIn.module.css'
import ChangeCar from './ChangeCar/ChangeCar';
import ContactForm from "../../components/ContactFrom/ContactForm";
import SendForm from "../../components/SendForm/SendForm";
import Footer from "../../components/Footer/Footer";

const TradeIn = () => {
  return (
    <div>
      <h1 className='header-info'>Трейд-ин</h1>
      <SendForm type={'trade-in'}/>
      <h1 className='header-info'>Обменяйте ваше авто</h1>
      <ChangeCar/>
      {/*<h1 className='header-info'>Остались вопросы?</h1>*/}
      {/*<ContactForm/>*/}
      <Footer/>
    </div>
  )
}

export default TradeIn