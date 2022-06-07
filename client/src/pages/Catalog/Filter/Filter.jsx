import React from 'react';
import style from './Filter.module.css'
import SelectorSplit from "../../../components/Filters/SelectorSplit/SelectorSplit";
import AutoCompleteDropDown from '../../../components/AutoCompleteDropDown/AutoCompleteDropDown';
import {
  setSelectedBodyTypeAC,
  setSelectedBrandAC,
  setSelectedDriveUnitAC, setSelectedMaxMillageAC,
  setSelectedMaxPriceAC,
  setSelectedMaxYearAC,
  setSelectedMinMillageAC,
  setSelectedMinPriceAC,
  setSelectedMinYearAC,
  setSelectedModelsAC,
  setSelectedSteeringWheelAC,
  setSelectedTransmissionAC,
} from '../../../redux/carSpecReducer';
import {useDispatch, useSelector} from 'react-redux';
import {useIntl} from 'react-intl';

const Filter = () => {

  const selectedBrand = useSelector(state => state.specifications.selectedBrand)
  const selectedModel = useSelector(state => state.specifications.selectedModel)
  const selectedBodyType = useSelector(state => state.specifications.selectedBodyType)
  const selectedDriveUnit = useSelector(state => state.specifications.selectedDriveUnit)
  const selectedTransmission = useSelector(state => state.specifications.selectedTransmission)
  const selectedSteeringWheel = useSelector(state => state.specifications.selectedSteeringWheel)
  const brands = useSelector(state => state.specifications.brands)
  const filterModels = useSelector(state => state.specifications.filterModels)
  const driveUnits = useSelector(state => state.specifications.driveUnits)
  const transmissions = useSelector(state => state.specifications.transmissions)
  const steeringWheels = useSelector(state => state.specifications.steeringWheels)
  const bodyTypes = useSelector(state => state.specifications.bodyTypes)
  const minPrice = useSelector(state => state.specifications.selectedMinPrice)
  const maxPrice = useSelector(state => state.specifications.selectedMaxPrice)
  const minYear = useSelector(state => state.specifications.selectedMinYear)
  const maxYear = useSelector(state => state.specifications.selectedMaxYear)
  const minMillage = useSelector(state => state.specifications.selectedMinMillage)
  const maxMillage = useSelector(state => state.specifications.selectedMaxMillage)

  const dispatch = useDispatch()
  const intl = useIntl()

  return (
    <div className={style.filter}>
      <AutoCompleteDropDown optionsData={brands} dropDownName={intl.formatMessage({id: 'filter_brand'})} setChosen={setSelectedBrandAC} chosen={selectedBrand}/>
      {selectedBrand ?
        <AutoCompleteDropDown optionsData={filterModels} dropDownName={intl.formatMessage({id: 'filter_model'})} setChosen={setSelectedModelsAC} chosen={selectedModel}/>
        :   <input placeholder={intl.formatMessage({id: 'filter_model'})} className={style.notSelected} readOnly/>
      }
      <AutoCompleteDropDown optionsData={bodyTypes} dropDownName={intl.formatMessage({id: 'filter_body_type'})} setChosen={setSelectedBodyTypeAC} chosen={selectedBodyType}/>
      <AutoCompleteDropDown optionsData={driveUnits} dropDownName={intl.formatMessage({id: 'filter_drive_unit'})} setChosen={setSelectedDriveUnitAC} chosen={selectedDriveUnit}/>
      <AutoCompleteDropDown optionsData={transmissions} dropDownName={intl.formatMessage({id: 'filter_transmission'})} setChosen={setSelectedTransmissionAC} chosen={selectedTransmission}/>
      <AutoCompleteDropDown optionsData={steeringWheels} dropDownName={intl.formatMessage({id: 'filter_steering_wheel'})} setChosen={setSelectedSteeringWheelAC} chosen={selectedSteeringWheel}/>

      <SelectorSplit selectorName={intl.formatMessage({id: 'filter_price'})} setMin={e => dispatch(setSelectedMinPriceAC(e))} setMax={e => dispatch(setSelectedMaxPriceAC(e))} max={maxPrice} min={minPrice}/>
      <SelectorSplit selectorName={intl.formatMessage({id: 'filter_year'})} setMin={e => dispatch(setSelectedMinYearAC(e))} setMax={e => dispatch(setSelectedMaxYearAC(e))} max={maxYear} min={minYear}/>
      <SelectorSplit selectorName={intl.formatMessage({id: 'filter_millage'})} setMin={e => dispatch(setSelectedMinMillageAC(e))} setMax={e => dispatch(setSelectedMaxMillageAC(e))} max={maxMillage} min={minMillage}/>
    </div>)
}

export default Filter