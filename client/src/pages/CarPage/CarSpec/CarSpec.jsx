import React from 'react';
import style from './CarSpec.module.css'
import {useSelector} from 'react-redux';

const CarSpec = ({car}) => {

  let brand = useSelector(state => state.specifications.brands).filter((b) => b.id === car.brandId)
  let model = useSelector(state => state.specifications.models).filter((m) => m.id === car.modelId)
  let transmission = useSelector(state => state.specifications.transmissions).filter((t) => t.id === car.transmissionId)
  let driveUnit = useSelector(state => state.specifications.driveUnits).filter((du) => du.id === car.driveUnitId)
  let color = useSelector(state => state.specifications.colors).filter((c) => c.id === car.colorId)
  let steeringWheel = useSelector(state => state.specifications.steeringWheels).filter((sw) => sw.id === car.steeringWheelId)
  const millage = new Intl.NumberFormat('ru-RU').format(car.millage);
  const price = new Intl.NumberFormat('ru-RU').format(car.price);

  if (brand === []) {
    brand = [{name: ''}]
  }

  if (model === []) {
    model = [{name: ''}]
  }

  console.log(car.description)

  return (
    <div>
      <div className={style.carName}>{`${brand[0].name} ${model[0].name}`}</div>
      <div className={style.line}/>
      <div className={style.carInfo}>
        <div className={style.spec}>
          <div className={style.specHead}>Пробег</div>
          <div className={style.info}>{millage} км</div>
        </div>
        <div className={style.spec}>
          <div className={style.specHead}>Мощность</div>
          <div className={style.info}>{car.power} л.с.</div>
        </div>
        <div className={style.spec}>
          <div className={style.specHead}>Трансмиссия</div>
          <div className={style.specInfo}>{transmission[0].name}</div>
        </div>
        <div className={style.spec}>
          <div className={style.specHead}>Привод</div>
          <div className={style.specInfo}>{driveUnit[0].name}</div>
        </div>
        <div className={style.spec}>
          <div className={style.specHead}>Цвет</div>
          <div className={style.specInfo}>{color[0].name}</div>
        </div>
        <div className={style.spec}>
          <div className={style.specHead}>Руль</div>
          <div className={style.specInfo}>{steeringWheel[0].name}</div>
        </div>
        <div className={style.spec}>
          <div className={style.specHead}>Год</div>
          <div className={style.specInfo}>{car.year}</div>
        </div>
        <div className={style.spec}>
          <div className={style.specHead}>Владельцев</div>
          <div className={style.specInfo}>{car.owners}</div>
        </div>
      </div>
      <div className={style.line}/>
      <div className={style.price}>
        <div className={style.specHead}>Стоимость</div>
        <h1 className={style.priceInfo}>
          {price}
          <span className={style.ruble}> ₽</span>
        </h1>
      </div>
      <div className={style.line}/>
      <div className={style.description}>
        <div className={style.specHead}>Описание</div>
        <pre><p className={style.descriptionInfo}>{car.description}</p></pre>
      </div>
    </div>
  );
};

export default CarSpec;