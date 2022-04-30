import React, {useEffect} from 'react';
import style from './OnSale.module.css'
import CarCards from "../../../components/CarCards/CarCards";
import {NavLink} from 'react-router-dom';
import {fetchCars} from '../../../http/carAPI';
import {useDispatch, useSelector} from 'react-redux';
import {setCarsAC, setTotalCountAC} from '../../../redux/carsReducer';

const OnSale = (props) => {
  const dispatch = useDispatch()
  const cars = useSelector(state => state.cars.carsData)

  useEffect(() => {
    fetchCars(1, 3).then(data => {
      dispatch(setTotalCountAC(data.count))
      dispatch(setCarsAC(data.rows))
    })
  },[])

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