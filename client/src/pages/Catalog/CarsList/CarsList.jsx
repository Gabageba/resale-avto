import React from 'react';
import style from './CarsList.module.css'
import CarCards from "../../../components/CarCards/CarCards";
import {useSelector} from 'react-redux';



const CarsList = () => {

  const carsData = useSelector(state => state.cars.carsData)

  return (
    <div className={style.carList}>
      <div className={style.cars}>
        {carsData.map(car=>(
          <CarCards key={car.id} carData={car} />
        ))}
      </div>
    </div>

  )
}

export default CarsList