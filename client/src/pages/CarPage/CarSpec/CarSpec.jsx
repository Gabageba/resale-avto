import React, {useEffect, useState} from 'react';
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
import {addFavourite, checkFavorite, deleteFavorite} from '../../../http/favouriteAPI';
import Spinner from '../../../components/Spinner/Spinner';
import {setCurrentFavoriteAC} from '../../../redux/favoritesReducer';
import {FormattedMessage} from 'react-intl';

const CarSpec = ({car, user, carId}) => {

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
  const isAuth = useSelector(state => state.userData.isAuth)
  const currentFavorite = useSelector(state => state.favorite.currentFavorite)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBrands().then(data => dispatch(setBrandAC(data.filter((b) => b.id === car.brandId))))
    fetchSteeringWheels().then(data => dispatch(setSteeringWheelAC(data.filter((sw) => sw.id === car.steeringWheelId))))
    fetchModels().then(data => dispatch(setModelAC(data.filter((m) => m.id === car.modelId))))
    fetchDriveUnits().then(data => dispatch(setDriveUnitAC(data.filter((du) => du.id === car.driveUnitId))))
    fetchBodyTypes().then(data => dispatch(setBodyTypeAC(data.filter((bt) => bt.id === car.bodyTypeId))))
    fetchColors().then(data => dispatch(setColorAC(data.filter((c) => c.id === car.colorId))))
    if (isAuth) {
      checkFavorite(user.mainInfo.id, carId).then(data => {
        dispatch(setCurrentFavoriteAC(data))
      })
    }
    fetchTransmission().then(data => dispatch(setTransmissionAC(data.filter((t) => t.id === car.transmissionId)))).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner/>
  }

  const favorite = () => {
    addFavourite(carId, user.mainInfo.id).then(data => {
      dispatch(setCurrentFavoriteAC(data))
    })
  }
  const unFavorite = () => {
    deleteFavorite(user.mainInfo.id, carId).then(data => {
      dispatch(setCurrentFavoriteAC(data))
    })
  }

  return (
    <div>
      <div className={style.header}>
        { brand.name.length +  model.name.length >= 20 ?
          <div className={style.carName}>
            <div >{`${brand.name}`}</div>
            <div >{`${model.name}`}</div>
          </div>
          : <div className={style.carName}>{`${brand.name} ${model.name}`}</div>

        }

        {isAuth ?
          currentFavorite !== null ?
            <div className={style.fav} onClick={unFavorite}>
              <span className="material-icons-outlined">favorite</span>
            </div>
            :
            <div className={style.unFav} onClick={favorite}>
              <span className="material-icons-outlined">favorite_border</span>
            </div>
          : null
        }
      </div>
      <div className={style.line}/>
      <div className={style.carInfo}>
        <div className={style.spec}>
          <div className={style.specHead}><FormattedMessage id='car_millage' /></div>
          <div className={style.info}>{millage} км</div>
        </div>
        <div className={style.spec}>
          <div className={style.specHead}><FormattedMessage id='add_power' /></div>
          <div className={style.info}>{car.power} л.с.</div>
        </div>
        <div className={style.spec}>
          <div className={style.specHead}><FormattedMessage id='filter_body_type' /></div>
          <div className={style.specInfo}>{bodyType.name}</div>
        </div>
        <div className={style.spec}>
          <div className={style.specHead}><FormattedMessage id='filter_transmission' /></div>
          <div className={style.specInfo}>{transmission.name}</div>
        </div>
        <div className={style.spec}>
          <div className={style.specHead}><FormattedMessage id='filter_drive_unit' /></div>
          <div className={style.specInfo}>{driveUnit.name}</div>
        </div>
        <div className={style.spec}>
          <div className={style.specHead}><FormattedMessage id='add_color' /></div>
          <div className={style.specInfo}>{color.name}</div>
        </div>
        <div className={style.spec}>
          <div className={style.specHead}><FormattedMessage id='filter_steering_wheel' /></div>
          <div className={style.specInfo}>{steeringWheel.name}</div>
        </div>
        <div className={style.spec}>
          <div className={style.specHead}><FormattedMessage id='filter_year' /></div>
          <div className={style.specInfo}>{car.year}</div>
        </div>
        <div className={style.spec}>
          <div className={style.specHead}><FormattedMessage id='add_owners' /></div>
          <div className={style.specInfo}>{car.owners}</div>
        </div>
      </div>
      <div className={style.line}/>
      <div className={style.price}>
        <div className={style.specHead}><FormattedMessage id='car_page_price' /></div>
        <h1 className={style.priceInfo}>
          {price}
          <span className={style.ruble}> ₽</span>
        </h1>
      </div>
      <div className={style.line}/>
      <div className={style.description}>
        <div className={style.specHead}><FormattedMessage id='add_description' /></div>
        <pre ><p className={style.descriptionInfo}>{car.description}</p></pre>
      </div>
    </div>
  );
};

export default CarSpec;