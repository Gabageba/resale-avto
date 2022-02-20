import React from 'react';
import style from './Main.module.css'
import Banner from './Banner/Banner';
import AboutUs from './AboutUs/AboutUs';
import Services from './Services/Services';

const Main = () => {
  return (
    <div className={style.main}>
      <Banner />
      <AboutUs />
      <Services/>
    </div>
  )
}

export default Main