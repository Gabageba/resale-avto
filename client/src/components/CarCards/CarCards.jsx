import React from 'react';
import style from './CarCards.module.css'
import AdditionalSpec from './AdditionalSpec/AdditionalSpec';
import {useSelector} from 'react-redux';

const CarCards = ({carData}) => {

  let brand = useSelector(state => state.specifications.brands).filter((b) => b.id === carData.brandId)
  let model = useSelector(state => state.specifications.models).filter((m) => m.id === carData.modelId)

  if (brand === []) {
    brand = [{name: ''}]
  }

  if (model === []) {
    model = [{name: ''}]
  }

  const fmtMillage = new Intl.NumberFormat('ru-RU').format(carData.millage);
  const fmtPrice =  new Intl.NumberFormat('ru-RU').format(carData.price);

  return (
    <div className={style.carCards} key={carData.id}>
      <img src={process.env.REACT_APP_API_URL + carData.img} alt={carData.name}/>
      <p className={style.carName}>{`${brand[0].name } ${model[0].name}`}</p>
      <p className={style.year}>{carData.year}</p>
      <div className={style.otherSpec}>
        <AdditionalSpec nameSpec='Пробег' dataSpec={fmtMillage}/>
        <AdditionalSpec nameSpec='Владельцев' dataSpec={carData.owners}/>
      </div>
      <p className={style.price}>{fmtPrice} ₽</p>
    </div>
  )
}

export default CarCards