import React, {useEffect, useState} from 'react';
import style from './Catalog.module.css'
import Footer from '../../components/Footer/Footer';
import Filter from './Filter/Filter';
import ShowSetting from './ShowSetting/ShowSetting';
import {
  fetchBodyTypes,
  fetchBrands, fetchCars, fetchColors,
  fetchDriveUnits,
  fetchModels,
  fetchSteeringWheels,
  fetchTransmission
} from '../../http/carAPI';
import Spinner from '../../components/Spinner/Spinner';
import CarsList from './CarsList/CarsList';
import {
  setBodyTypesAC,
  setBrandsAC,
  setDriveUnitsAC,
  setModelsAC,
  setSteeringWheelsAC,
  setTransmissionsAC
} from '../../redux/carSpecReducer';
import {useDispatch, useSelector} from 'react-redux';

const Catalog = (props) => {

  const [loading, setLoading] = useState(true)

  const brands = useSelector(state => state.specifications.brands)
  const models = useSelector(state => state.specifications.models)
  const driveUnits = useSelector(state => state.specifications.driveUnits)
  const transmissions = useSelector(state => state.specifications.transmissions)
  const steeringWheels = useSelector(state => state.specifications.steeringWheels)
  const bodyTypes = useSelector(state => state.specifications.bodyTypes)
  const dispatch = useDispatch()


  useEffect(() => {
    fetchBrands().then(data => dispatch(setBrandsAC(data)))
    fetchModels().then(data => dispatch(setModelsAC(data)))
    fetchDriveUnits().then(data => dispatch(setDriveUnitsAC(data)))
    fetchTransmission().then(data => dispatch(setTransmissionsAC(data)))
    fetchSteeringWheels().then(data => dispatch(setSteeringWheelsAC(data)))
    fetchBodyTypes().then(data => dispatch(setBodyTypesAC(data)))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner/>
  }

  return (
    <div className={style.catalog}>
      <h1 className="header-info">Авто в продаже</h1>
      <Filter bodyTypes={bodyTypes}
              brands={brands}
              models={models}
              steeringWheel={steeringWheels}
              transmission={transmissions}
              driveUnits={driveUnits}/>
      <div>
        <button className={style.searchButton}>Искать</button>
        <button className={style.clearButton}>Сбросить</button>
      </div>
      <ShowSetting/>
      <CarsList/>
      <Footer/>
    </div>
  )
}

export default Catalog