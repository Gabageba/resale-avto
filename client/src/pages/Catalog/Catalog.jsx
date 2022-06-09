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
  setSelectedDriveUnitAC, setSelectedMaxMillageAC,
  setSelectedMaxPriceAC,
  setSelectedMaxYearAC,
  setSelectedMinMillageAC,
  setSelectedMinPriceAC,
  setSelectedMinYearAC,
  setSelectedModelsAC, setSelectedSteeringWheelAC,
  setSelectedTransmissionAC,
  setSteeringWheelsAC,
  setTransmissionsAC
} from '../../redux/carSpecReducer';
import {useDispatch, useSelector} from 'react-redux';
import {setCarsAC, setCurrentPageAC, setIsDel, setLimitAC, setTotalCountAC} from '../../redux/carsReducer';
import Pages from '../../components/Pages/Pages';
import {FormattedMessage} from 'react-intl';

const Catalog = () => {

  const [loading, setLoading] = useState(true)

  const totalCount = useSelector(state => state.cars.totalCount)
  const currentPage = useSelector(state => state.cars.currentPage)
  const limit = useSelector(state => state.cars.limit)
  const dispatch = useDispatch()
  const selectedBrand = useSelector(state => state.specifications.selectedBrand)
  const selectedBodyType = useSelector(state => state.specifications.selectedBodyType)
  const selectedModel = useSelector(state => state.specifications.selectedModel)
  const selectedDriveUnit = useSelector(state => state.specifications.selectedDriveUnit)
  const selectedSteeringWheel = useSelector(state => state.specifications.selectedSteeringWheel)
  const selectedTransmission = useSelector(state => state.specifications.selectedTransmission)
  const minPrice = useSelector(state => state.specifications.selectedMinPrice)
  const maxPrice = useSelector(state => state.specifications.selectedMaxPrice)
  const minYear = useSelector(state => state.specifications.selectedMinYear)
  const maxYear = useSelector(state => state.specifications.selectedMaxYear)
  const minMillage = useSelector(state => state.specifications.selectedMinMillage)
  const maxMillage = useSelector(state => state.specifications.selectedMaxMillage)

  const selectedSort = useSelector(state => state.showSetting.selectedSort)
  const selectedView = useSelector(state => state.showSetting.selectedView)

  useEffect(() => {
    clear()
    fetchBrands().then(data => dispatch(setBrandsAC(data)))
    fetchModels().then(data => {
      dispatch(setModelsAC(data))
      dispatch(setFilterModels(data))
    })
    dispatch(setIsDel(false))
    fetchDriveUnits().then(data => dispatch(setDriveUnitsAC(data)))
    fetchTransmission().then(data => dispatch(setTransmissionsAC(data)))
    fetchSteeringWheels().then(data => dispatch(setSteeringWheelsAC(data)))
    fetchBodyTypes().then(data => dispatch(setBodyTypesAC(data)))
    fetchCars(currentPage, limit, selectedSort.name).then(data => {
      dispatch(setTotalCountAC(data.count))
      dispatch(setCarsAC(data.rows))
    })
      .finally(() => setLoading(false))
  }, [])

  const clear = () => {
    dispatch(setSelectedBrandAC(''))
    dispatch(setSelectedModelsAC(''))
    dispatch(setSelectedBodyTypeAC(''))
    dispatch(setSelectedDriveUnitAC(''))
    dispatch(setSelectedSteeringWheelAC(''))
    dispatch(setSelectedSteeringWheelAC(''))
    dispatch(setSelectedTransmissionAC(''))
    dispatch(setSelectedMinPriceAC(''))
    dispatch(setSelectedMaxPriceAC(''))
    dispatch(setSelectedMinYearAC(''))
    dispatch(setSelectedMaxYearAC(''))
    dispatch(setSelectedMinMillageAC(''))
    dispatch(setSelectedMaxMillageAC(''))
  }


  useEffect(() => {
    // dispatch(setCurrentPageAC(1))
    fetchCars(currentPage, limit, selectedSort.name, selectedBrand.id, selectedModel.id,
      selectedBodyType.id, selectedDriveUnit.id, selectedTransmission.id,
      selectedSteeringWheel.id, minPrice, maxPrice, minYear, maxYear, minMillage, maxMillage)
      .then(data => {
        dispatch(setTotalCountAC(data.count))
        dispatch(setCarsAC(data.rows))
      })
  }, [selectedSort])

  useEffect(() => {
    if (selectedView.name === 'Grid') {
      dispatch(setLimitAC(9))
      // dispatch(setCurrentPageAC(1))
      fetchCars(1, 9,selectedSort.name, selectedBrand.id, selectedModel.id,
        selectedBodyType.id, selectedDriveUnit.id, selectedTransmission.id,
        selectedSteeringWheel.id, minPrice, maxPrice, minYear, maxYear, minMillage, maxMillage)
        .then(data => {
          dispatch(setTotalCountAC(data.count))
          dispatch(setCarsAC(data.rows))
        })
    } else if (selectedView.name === 'List') {
      dispatch(setLimitAC(6))
      // dispatch(setCurrentPageAC(1))
      fetchCars(1, 6,selectedSort.name, selectedBrand.id, selectedModel.id,
        selectedBodyType.id, selectedDriveUnit.id, selectedTransmission.id,
        selectedSteeringWheel.id, minPrice, maxPrice, minYear, maxYear, minMillage, maxMillage)
        .then(data => {
          dispatch(setTotalCountAC(data.count))
          dispatch(setCarsAC(data.rows))
        })
    }
  }, [selectedView])

  useEffect(() => {
    setLoading(true)
    fetchCars(currentPage, limit, selectedSort.name, selectedBrand.id, selectedModel.id,
      selectedBodyType.id, selectedDriveUnit.id, selectedTransmission.id,
      selectedSteeringWheel.id, minPrice, maxPrice, minYear, maxYear, minMillage, maxMillage).then(data => {
      dispatch(setTotalCountAC(data.count))
      dispatch(setCarsAC(data.rows))
    }).finally(() => setLoading(false))
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
    dispatch(setCurrentPageAC(1))
    fetchCars(currentPage, limit,selectedSort.name, selectedBrand.id, selectedModel.id,
      selectedBodyType.id, selectedDriveUnit.id, selectedTransmission.id,
      selectedSteeringWheel.id, minPrice, maxPrice, minYear, maxYear, minMillage, maxMillage)
      .then(data => {
        dispatch(setTotalCountAC(data.count))
        dispatch(setCarsAC(data.rows))
      })
  }

  const onClearClick = () => {
    dispatch(setCurrentPageAC(1))
    fetchCars(currentPage, limit, selectedSort.name).then(data => {
      dispatch(setTotalCountAC(data.count))
      dispatch(setCarsAC(data.rows))
    })
    dispatch(setSelectedBrandAC(''))
    dispatch(setSelectedModelsAC(''))
    dispatch(setSelectedBodyTypeAC(''))
    dispatch(setSelectedDriveUnitAC(''))
    dispatch(setSelectedTransmissionAC(''))
    dispatch(setSelectedDriveUnitAC(''))
    dispatch(setSelectedMinPriceAC(''))
    dispatch(setSelectedMaxPriceAC(''))
    dispatch(setSelectedMinYearAC(''))
    dispatch(setSelectedMaxYearAC(''))
    dispatch(setSelectedMinMillageAC(''))
    dispatch(setSelectedMaxMillageAC(''))

  }


  return (
    <div className={style.catalog}>
      <h1 className="header-info"><FormattedMessage id='catalog_title' /></h1>
      <Filter/>
      <div>
        <button className={style.searchButton} onClick={onSearchClick}><FormattedMessage id='catalog_search_button' /></button>
        <button className={style.clearButton} onClick={onClearClick}><FormattedMessage id='catalog_reset_button' /></button>
      </div>
      <ShowSetting/>
      <CarsList/>
      <Pages currentPage={currentPage} limit={limit} totalCount={totalCount} setPage={setCurrentPageAC}/>
      <Footer/>
    </div>
  )
}

export default Catalog