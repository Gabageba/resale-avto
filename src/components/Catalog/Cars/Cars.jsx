import React from 'react';
import style from './Cars.module.css'
import CarCards from '../../CarCards/CarCards';



const Cars = (props) => {

  let cards = props.state.car.map(c=>(
    <CarCards state={c} />
  ))

  return (
    <div className={style.cars}>
      {cards}
      {cards}
      {cards}

    </div>
  )
}

export default Cars