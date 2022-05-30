import React from 'react';
import style from './CarsList.module.css'
import CarCards from "../../../components/CarCards/CarCards";
import {useSelector} from 'react-redux';
import InLineCarCards from '../../../components/InLineCarCards/InLineCarCards';



const CarsList = () => {

  const carsData = useSelector(state => state.cars.carsData)
  const isDel = useSelector(state => state.cars.isDel)
  const selectedView = useSelector(state => state.showSetting.selectedView)

  return (
    <div className={style.carList}>
      {
        carsData.length === 0 ?
          <div className={style.error}>
            <div className={style.errorText}>Извините, но по вашим критериям ничего не нашлось...</div>
          </div>
          : selectedView.name === 'Grid' ?
          <div className={style.cars}>
            {
              carsData.map(car=>(
                <CarCards key={car.id} carData={car} isDel={isDel}/>
              ))}
          </div>
          :
            <div className={style.carsLine}>
              {
                carsData.map(car=>(
                  <InLineCarCards key={car.id} carData={car} isDel={isDel}/>
                ))}
            </div>
      }

    </div>

  )
}

export default CarsList