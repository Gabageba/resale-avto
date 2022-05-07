import React from 'react';
import style from './CarsList.module.css'
import CarCards from "../../../components/CarCards/CarCards";
import {useSelector} from 'react-redux';



const Cars = () => {

  const carsData = useSelector(state => state.cars.carsData)

  let cards = carsData.map(c=>(
    <CarCards state={c} />
  ))

  return (
    <div className={style.cars}>
      {cards}
    </div>
  )
}

export default Cars