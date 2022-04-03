import React from 'react';
import style from './Catalog.module.css'
import Footer from "../../components/Footer/Footer";
import Filter from "./Filter/Filter";
import CarsListContainer from "./CarsList/CarsListContainer";
import ShowSetting from "./ShowSetting/ShowSetting";

const Catalog = (props) => {
  return (
    <div className={style.catalog}>
      <h1 className='header-info'>Авто в продаже</h1>
      <Filter/>
      <ShowSetting/>
      <CarsListContainer/>
      <Footer/>
    </div>
  )
}

export default Catalog