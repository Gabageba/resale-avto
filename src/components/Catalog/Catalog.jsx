import React from 'react';
import style from './Catalog.module.css'
import Filter from './Filter/Filter';

const Catalog = () => {
  return (
    <div className={style.catalog}>
      <h1 className='header-info'>Авто в продаже</h1>
      <Filter/>
    </div>
  )
}

export default Catalog