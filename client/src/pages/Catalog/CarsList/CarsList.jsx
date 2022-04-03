import React from 'react';
import style from './CarsList.module.css'
import CarCards from "../../../components/CarCards/CarCards";



const Cars = (props) => {

  let cards = props.carsData.map(c=>(
    <CarCards state={c} />
  ))

  return (
    <div className={style.cars}>
      {cards}
    </div>
  )
}

export default Cars