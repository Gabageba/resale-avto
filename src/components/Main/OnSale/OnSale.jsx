import React from 'react';
import style from './OnSale.module.css'
import CarCards from '../../CarCards/CarCards';
import {NavLink} from 'react-router-dom';

const OnSale = (props) => {

  let cards = props.state.car.map(c=>(
    <CarCards state={c} />
  ))

  return (
    <div className={style.onSale}>
      <div className={style.head}>
        <h1 className='header-info'>В продаже</h1>
        <NavLink to='/catalog' className={style.more}>Больше автомобилей →</NavLink>
      </div>
      <div className={style.catalog}>
        {cards}
      </div>
    </div>
  )
}

export default OnSale