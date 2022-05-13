import React, {useEffect, useState} from 'react';
import style from './Catalog.module.css'
import Footer from '../../components/Footer/Footer';
import Filter from './Filter/Filter';
import ShowSetting from './ShowSetting/ShowSetting';
import {
  fetchBodyTypes,
  fetchBrands, fetchCars,
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
  setFilterModels,
  setModelsAC,
  setSelectedBodyTypeAC,
  setSelectedBrandAC,
  setSelectedDriveUnitAC,
  setSelectedModelsAC,
  setSelectedTransmissionAC,
  setSteeringWheelsAC,
  setTransmissionsAC
} from '../../redux/carSpecReducer';
import {useDispatch, useSelector} from 'react-redux';
import {setCarsAC, setCurrentPageAC, setTotalCountAC} from '../../redux/carsReducer';
import Pages from './CarsList/Pages/Pages';

const Catalog = () => {

  const [loading, setLoading] = useState(true)

  const currentPage = useSelector(state => state.cars.currentPage)
  const limit = useSelector(state => state.cars.limit)
  const dispatch = useDispatch()

  const selectedBrand = useSelector(state => state.specifications.selectedBrand)
  const selectedBodyType = useSelector(state => state.specifications.selectedBodyType)
  const selectedModel = useSelector(state => state.specifications.selectedModel)
  const selectedDriveUnit = useSelector(state => state.specifications.selectedDriveUnit)
  const selectedSteeringWheel = useSelector(state => state.specifications.selectedSteeringWheel)
  const selectedTransmission = useSelector(state => state.specifications.selectedTransmission)


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
    fetchModels(selectedBrand.id).then(data => {
      dispatch(setFilterModels(data))
      dispatch(setSelectedModelsAC(''))
    })
  }, [selectedBrand])

  if (loading) {
    return <Spinner/>
  }

  const onSearchClick = () => {
    setCurrentPageAC(1)
    fetchCars(currentPage, limit, selectedBrand.id, selectedModel.id, selectedBodyType.id, selectedDriveUnit.id,  selectedTransmission.id, selectedSteeringWheel.id,).then(data => {
      dispatch(setTotalCountAC(data.count))
      dispatch(setCarsAC(data.rows))
    })
  }

  const onClearClick = () => {
    dispatch(setCurrentPageAC(1))
    fetchCars(currentPage, limit).then(data => {
      dispatch(setTotalCountAC(data.count))
      dispatch(setCarsAC(data.rows))
    })
    dispatch(setSelectedBrandAC(''))
    dispatch(setSelectedModelsAC(''))
    dispatch(setSelectedBodyTypeAC(''))
    dispatch(setSelectedDriveUnitAC(''))
    dispatch(setSelectedTransmissionAC(''))
    dispatch(setSelectedDriveUnitAC(''))

  }


  return (
    <div className={style.catalog}>
      <h1 className="header-info">Авто в продаже</h1>
      <Filter/>
      <div>
        <button className={style.searchButton} onClick={onSearchClick}>Искать</button>
        <button className={style.clearButton} onClick={onClearClick}>Сбросить</button>
      </div>
      <ShowSetting/>
      <CarsList />
      <Pages/>
      <Footer/>
    </div>
  )
}

export default Catalog