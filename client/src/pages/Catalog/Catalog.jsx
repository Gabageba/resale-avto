import React from 'react';
import style from './Catalog.module.css'
import Footer from "../../components/Footer/Footer";
import Filter from "./Filter/Filter";
import ShowSetting from "./ShowSetting/ShowSetting";
import CarsList from './CarsList/CarsList';

const Catalog = (props) => {
  return (
    <div className={style.catalog}>
      <h1 className='header-info'>Авто в продаже</h1>
      <Filter/>
      <ShowSetting/>
      <CarsList/>
      <Footer/>
    </div>
  )
}

export default Catalog