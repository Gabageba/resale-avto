import React, {useEffect} from 'react';
import style from './OnSale.module.css'
import CarCards from "../../../components/CarCards/CarCards";
import {NavLink} from 'react-router-dom';
import {fetchCars} from '../../../http/carAPI';
import {useDispatch, useSelector} from 'react-redux';
import {setTotalCountAC} from '../../../redux/carsReducer';
import {setUserAC} from '../../../redux/userReducer';

const OnSale = (props) => {
  const dispatch = useDispatch()
  const cars = useSelector(state => state.cars.carsData)

  useEffect(() => {
    fetchCars(1, 3).then(data => {
      dispatch(setTotalCountAC(data.count))
      dispatch(setUserAC(data.rows))
    })
  })

  let cards = cars.map(c => (
    <CarCards state={c}/>
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