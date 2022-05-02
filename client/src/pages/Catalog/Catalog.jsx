import React, {useEffect, useState} from 'react';
import style from './Catalog.module.css'
import Footer from "../../components/Footer/Footer";
import Filter from "./Filter/Filter";
import CarsListContainer from "./CarsList/CarsListContainer";
import ShowSetting from "./ShowSetting/ShowSetting";
import {fetchBodyTypes, fetchBrands, fetchDriveUnits, fetchModels} from '../../http/carAPI';
import Spinner from '../../components/Spinner/Spinner';

const Catalog = (props) => {

  const [bodyTypes, setBodyTypes] = useState([])
  const [brands, setBrands] = useState([])
  const [models, setModels] = useState([])
  const [driveUnits, setDriveUnits] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBrands().then(data => setBrands(data))
    fetchModels().then(data => setModels(data))
    fetchDriveUnits().then(data => setDriveUnits(data))
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
              driveUnits={driveUnits}/>
      <ShowSetting/>
      <CarsListContainer/>
      <Footer/>
    </div>
  )
}

export default Catalog