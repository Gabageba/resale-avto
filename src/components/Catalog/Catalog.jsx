import React from 'react';
import style from './Catalog.module.css'
import Filter from './Filter/Filter';
import ShowSetting from './ShowSetting/ShowSetting';
import Cars from './Cars/Cars';
import Footer from '../Footer/Footer';

const Catalog = (props) => {
  return (
    <div className={style.catalog}>
      <h1 className='header-info'>Авто в продаже</h1>
      <Filter/>
      <ShowSetting/>
      <Cars state={props.state.carCards}/>
      <Footer/>
    </div>
  )
}

export default Catalog