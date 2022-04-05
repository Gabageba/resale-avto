import React from 'react';
import style from './CarsList.module.css'
import CarCards from "../../../components/CarCards/CarCards";
import * as axios from "axios";



const Cars = (props) => {

  if (props.carsData.length === 0) {
    axios.get('http://localhost:5000/api/car').then(response => {
      props.setCars(response.data.rows)
    })
  }

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