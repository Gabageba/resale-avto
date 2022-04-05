import React from 'react';
import style from './OnSale.module.css'
import CarCards from "../../../components/CarCards/CarCards";
import {NavLink} from 'react-router-dom';
import * as axios from "axios";

const OnSale = (props) => {

  if (props.carsData.length === 0) {
    axios.get('http://localhost:5000/api/car').then(response => {
      props.setCars(response.data.rows)
    })
  }

  let cards = props.carsData.map(c => (
    <CarCards state={c} key={c.id}/>
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