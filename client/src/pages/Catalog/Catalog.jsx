import React, {useEffect, useState} from 'react';
import style from './Catalog.module.css'
import Footer from "../../components/Footer/Footer";
import Filter from "./Filter/Filter";
import ShowSetting from "./ShowSetting/ShowSetting";
import {
  fetchBodyTypes,
  fetchBrands, fetchColors,
  fetchDriveUnits,
  fetchModels,
  fetchSteeringWheels,
  fetchTransmission
} from '../../http/carAPI';
import Spinner from '../../components/Spinner/Spinner';
import CarsList from './CarsList/CarsList';

const Catalog = (props) => {

  const [bodyTypes, setBodyTypes] = useState([])
  const [brands, setBrands] = useState([])
  const [models, setModels] = useState([])
  const [driveUnits, setDriveUnits] = useState([])
  const [transmission, setTransmission] = useState([])
  const [steeringWheel, setSteeringWheel] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBrands().then(data => setBrands(data))
    fetchModels().then(data => setModels(data))
    fetchDriveUnits().then(data => setDriveUnits(data))
    fetchTransmission().then(data => setTransmission(data))
    fetchSteeringWheels().then(data => setSteeringWheel(data))
    fetchBodyTypes().then(data => setBodyTypes(data))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner/>
  }


  return (
    <div className={style.catalog}>
      <h1 className='header-info'>Авто в продаже</h1>
      <Filter bodyTypes={bodyTypes}
              brands={brands}
              models={models}
              steeringWheel={steeringWheel}
              transmission={transmission}
              driveUnits={driveUnits}/>
      <ShowSetting/>
      <CarsList/>
      <Footer/>
    </div>
  )
}

export default Catalog