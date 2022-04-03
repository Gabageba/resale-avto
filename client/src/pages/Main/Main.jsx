import React from 'react';
import style from './Main.module.css'
import Banner from './Banner/Banner';
import AboutUs from './AboutUs/AboutUs';
import Contacts from './Contacts/Contacts';
import OnSaleContainer from "./OnSale/OnSaleContainer";
import Services from "./Services/Services";
import Footer from "../../components/Footer/Footer";

const Main = (props) => {
  return (
    <div className={style.main}>
      <Banner />
      <AboutUs />
      <Services/>
      <OnSaleContainer/>
      <Contacts/>
      <Footer />
    </div>
  )
}

export default Main