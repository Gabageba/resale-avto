import React from 'react';
import style from './CarCards.module.css'
import AdditionalSpec from './AdditionalSpec/AdditionalSpec';
import {API_URL} from "../../utils/const";

const CarCards = (props) => {
  return (
    <div className={style.carCards} key={props.state.id}>
      <img src={API_URL + props.state.img} alt={props.state.name}/>
      <p className={style.carName}>brand model</p>
      <p className={style.year}>{props.state.year}</p>
      <div className={style.otherSpec}>
        <AdditionalSpec nameSpec='Пробег' dataSpec={props.state.millage}/>
        <AdditionalSpec nameSpec='Владельцев' dataSpec={props.state.owners}/>
      </div>
      <pre><p className={style.price}>{props.state.price + ' руб.'}</p></pre>
    </div>
  )
}

export default CarCards