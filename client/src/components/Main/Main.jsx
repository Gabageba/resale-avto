import React from 'react';
import style from './Main.module.css'
import Banner from './Banner/Banner';
import AboutUs from './AboutUs/AboutUs';
import Services from './Services/Services';
import OnSale from './OnSale/OnSale';
import Contacts from './Contacts/Contacts';
import Footer from '../Footer/Footer';

const Main = (props) => {
  return (
    <div className={style.main}>
      <Banner />
      <AboutUs />
      <Services/>
      <OnSale state={props.state.carCards}/>
      <Contacts/>
      <Footer />
    </div>
  )
}

export default Main