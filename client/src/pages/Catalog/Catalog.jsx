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
  setDriveUnitsAC, setFilterModels,
  setModelsAC,
  setSteeringWheelsAC, setTest,
  setTransmissionsAC
} from '../../redux/carSpecReducer';
import {useDispatch, useSelector} from 'react-redux';
import {setCarsAC, setCurrentPageAC, setTotalCountAC} from '../../redux/carsReducer';
import Pages from './CarsList/Pages/Pages';
import InputSpinner from '../../components/InputSpinner/InputSpinner';

const Catalog = () => {

  const [loading, setLoading] = useState(true)

  const currentPage = useSelector(state => state.cars.currentPage)
  const limit = useSelector(state => state.cars.limit)
  const dispatch = useDispatch()

  const selectedBrand = useSelector(state => state.specifications.selectedBrand)
  const selectedBodyType = useSelector(state => state.specifications.selectedBodyType)
  const selectedModel = useSelector(state => state.specifications.selectedModel)
  const selectedColor = useSelector(state => state.specifications.selectedColor)
  const selectedDriveUnit = useSelector(state => state.specifications.selectedDriveUnit)
  const selectedSteeringWheel = useSelector(state => state.specifications.selectedSteeringWheel)


  useEffect(() => {
    fetchBrands().then(data => dispatch(setBrandsAC(data)))
    fetchModels().then(data => {
      dispatch(setModelsAC(data))
      dispatch(setFilterModels(data))
    })
    fetchDriveUnits().then(data => dispatch(setDriveUnitsAC(data)))
    fetchTransmission().then(data => dispatch(setTransmissionsAC(data)))
    fetchSteeringWheels().then(data => dispatch(setSteeringWheelsAC(data)))
    fetchBodyTypes().then(data => dispatch(setBodyTypesAC(data)))
    fetchCars(currentPage, limit).then(data => {
      dispatch(setTotalCountAC(data.count))
      dispatch(setCarsAC(data.rows))
    })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    fetchCars(currentPage, limit).then(data => {
      dispatch(setTotalCountAC(data.count))
      dispatch(setCarsAC(data.rows))
    })
  }, [currentPage])

  useEffect(() => {
    setLoading(true)
    fetchModels(selectedBrand.id).then(data => {
      dispatch(setFilterModels(data))
    }).finally(() => setLoading(false))
  }, [selectedBrand])

  if (loading) {
    return <Spinner/>
  }

  const onSearchClick = () => {
    setCurrentPageAC(1)
    fetchCars(currentPage, limit, selectedBodyType.id, selectedBrand.id, selectedModel.id, selectedColor.id, selectedDriveUnit.id,selectedSteeringWheel.id ).then(data => {
      dispatch(setTotalCountAC(data.count))
      dispatch(setCarsAC(data.rows))
      console.log(data)
    })
  }


  return (
    <div className={style.catalog}>
      <h1 className="header-info">Авто в продаже</h1>
      <Filter/>
      <div>
        <button className={style.searchButton} onClick={onSearchClick}>Искать</button>
        <button className={style.clearButton}>Сбросить</button>
      </div>
      <ShowSetting/>
      <CarsList/>
      <Pages/>
      <Footer/>
    </div>
  )
}

export default Catalog