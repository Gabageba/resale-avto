import React from 'react';
import SendForm from '../../components/SendForm/SendForm';
import CommissionCar from './CommissionCar/CommissionCar';
import Footer from "../../components/Footer/Footer";
import {FormattedMessage} from 'react-intl';

const Commission = () => {
  return (
    <div>
      <h1 className='header-info'><FormattedMessage id='commission_header' /></h1>
      <SendForm type={'commission'}/>
      <h1 className='header-info'><FormattedMessage id='commission_sell_header' /></h1>
      <CommissionCar/>
      {/*<h1 className='header-info'>Остались вопросы?</h1>*/}
      {/*<ContactForm/>*/}
      <Footer/>
    </div>
  )
}

export default Commission