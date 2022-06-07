import React from 'react';
import ChangeCar from './ChangeCar/ChangeCar';
import SendForm from "../../components/SendForm/SendForm";
import Footer from "../../components/Footer/Footer";
import {FormattedMessage} from 'react-intl';

const TradeIn = () => {
  return (
    <div>
      <h1 className='header-info'><FormattedMessage id='trade_in_header' /></h1>
      <SendForm type={'trade-in'}/>
      <h1 className='header-info'><FormattedMessage id='trade_in_change_header' /></h1>
      <ChangeCar/>
      {/*<h1 className='header-info'>Остались вопросы?</h1>*/}
      {/*<ContactForm/>*/}
      <Footer/>
    </div>
  )
}

export default TradeIn