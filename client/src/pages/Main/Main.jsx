import React, {useEffect, useState} from 'react';
import style from './Main.module.css'
import Banner from './Banner/Banner';
import AboutUs from './AboutUs/AboutUs';
import Contacts from './Contacts/Contacts';
import Services from "./Services/Services";
import Footer from "../../components/Footer/Footer";
import OnSale from './OnSale/OnSale';

const Main = (props) => {
  return (
    <div className={style.main}>
      <Banner />
      <AboutUs />
      <Services/>
      <OnSale/>
      <Contacts/>
      <Footer />
    </div>
  )
}

export default Main