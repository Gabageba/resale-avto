import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import style from '../../../Catalog/CarsList/CarsList.module.css'
import {fetchCars} from '../../../../http/carAPI';
import {setCarsAC, setTotalCountAC} from '../../../../redux/carsReducer';
import CarCards from '../../../../components/CarCards/CarCards';



const OnSaleCarList = () => {

  const carsData = useSelector(state => state.cars.carsData)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchCars(1, 3).then(data => {
      dispatch(setTotalCountAC(data.count))
      dispatch(setCarsAC(data.rows))
    })
  },[])

  return (
    <div className={style.cars}>
      {carsData.map(car=>(
        <CarCards key={car.id} carData={car} />
      ))}
    </div>
  )
}

export default OnSaleCarList