import React from 'react';
import style from './CarCards.module.css'
import AdditionalSpec from './AdditionalSpec/AdditionalSpec';

const CarCards = (props) => {
  return (
    <div className={style.carCards} key={props.id}>
      <img src={props.state.img} alt={props.state.name}/>
      <p className={style.carName}>{props.state.name}</p>
      <p className={style.year}>{props.state.year}</p>
      <div className={style.otherSpec}>
        <AdditionalSpec nameSpec='Пробег' dataSpec={props.state.mileage}/>
        <AdditionalSpec nameSpec='Владельцев' dataSpec={props.state.owners}/>
      </div>
      <pre><p className={style.price}>{props.state.price}</p></pre>
    </div>
  )
}

export default CarCards