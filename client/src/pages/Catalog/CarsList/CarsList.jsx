import React from 'react';
import style from './CarsList.module.css'
import CarCards from "../../../components/CarCards/CarCards";

const Cars = (props) => {


  let cars = props.carsData.map(c => (
    <CarCards state={c} key={c.id}/>
  ))

  console.log(props.carsData)
  return (
    <div className={style.cars}>
      {cars}
    </div>
  )
}

export default Cars