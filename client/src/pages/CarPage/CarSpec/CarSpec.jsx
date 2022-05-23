import React, {useEffect} from 'react';
import style from './CarSpec.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchBodyTypes,
  fetchBrands,
  fetchColors,
  fetchDriveUnits,
  fetchModels,
  fetchSteeringWheels,
  fetchTransmission
} from '../../../http/carAPI';
import {
  setBodyTypeAC,
  setBrandAC, setColorAC,
  setDriveUnitAC,
  setModelAC,
  setSteeringWheelAC, setTransmissionAC
} from '../../../redux/currentCarPageReducer';

const CarSpec = ({car}) => {

  const brand = useSelector(state => state.currentCar.brand[0])
  const model = useSelector(state => state.currentCar.model[0])
  const steeringWheel = useSelector(state => state.currentCar.steeringWheel[0])
  const driveUnit = useSelector(state => state.currentCar.driveUnit[0])
  const bodyType = useSelector(state => state.currentCar.bodyType[0])
  const color = useSelector(state => state.currentCar.color[0])
  const transmission = useSelector(state => state.currentCar.transmission[0])
  const millage = new Intl.NumberFormat('ru-RU').format(car.millage);
  const price = new Intl.NumberFormat('ru-RU').format(car.price);
  const dispatch = useDispatch()

  useEffect(() => {
    fetchBrands().then(data => dispatch(setBrandAC(data.filter((b) => b.id === car.brandId))))
    fetchSteeringWheels().then(data => dispatch(setSteeringWheelAC(data.filter((sw) => sw.id === car.steeringWheelId))))
    fetchModels().then(data => dispatch(setModelAC(data.filter((m) => m.id === car.modelId))))
    fetchDriveUnits().then(data => dispatch(setDriveUnitAC(data.filter((du) => du.id === car.driveUnitId))))
    fetchBodyTypes().then(data => dispatch(setBodyTypeAC(data.filter((bt) => bt.id === car.bodyTypeId))))
    fetchColors().then(data => dispatch(setColorAC(data.filter((c) => c.id === car.colorId))))
    fetchTransmission().then(data => dispatch(setTransmissionAC(data.filter((t) => t.id === car.transmissionId))))
  }, [])

  return (
    <div>
      <div className={style.carName}>{`${brand.name} ${model.name}`}</div>
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
          <div className={style.specHead}>Тип кузова</div>
          <div className={style.specInfo}>{bodyType.name}</div>
        </div>
        <div className={style.spec}>
          <div className={style.specHead}>Трансмиссия</div>
          <div className={style.specInfo}>{transmission.name}</div>
        </div>
        <div className={style.spec}>
          <div className={style.specHead}>Привод</div>
          <div className={style.specInfo}>{driveUnit.name}</div>
        </div>
        <div className={style.spec}>
          <div className={style.specHead}>Цвет</div>
          <div className={style.specInfo}>{color.name}</div>
        </div>
        <div className={style.spec}>
          <div className={style.specHead}>Руль</div>
          <div className={style.specInfo}>{steeringWheel.name}</div>
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