import React from 'react';
import style from './Filter.module.css'
import SelectorSplit from "../../../components/Filters/SelectorSplit/SelectorSplit";
import AutoCompleteDropDown from '../../../components/AutoCompleteDropDown/AutoCompleteDropDown';
import {
  setSelectedBodyTypeAC,
  setSelectedBrandAC,
  setSelectedDriveUnitAC,
  setSelectedModelsAC, setSelectedSteeringWheelAC, setSelectedTransmissionAC
} from '../../../redux/carSpecReducer';
import {useSelector} from 'react-redux';

const Filter = ({setMinPrice, setMaxPrice, setMinYear, setMaxYear, setMinMillage, setMaxMillage}) => {

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

  return (
    <div className={style.filter}>

      <AutoCompleteDropDown optionsData={brands} dropDownName={'Марка'} setChosen={setSelectedBrandAC} chosen={selectedBrand}/>
      <AutoCompleteDropDown optionsData={filterModels} dropDownName={'Модель'} setChosen={setSelectedModelsAC} chosen={selectedModel}/>
      <AutoCompleteDropDown optionsData={bodyTypes} dropDownName={'Тип кузова'} setChosen={setSelectedBodyTypeAC} chosen={selectedBodyType}/>
      <AutoCompleteDropDown optionsData={driveUnits} dropDownName={'Привод'} setChosen={setSelectedDriveUnitAC} chosen={selectedDriveUnit}/>
      <AutoCompleteDropDown optionsData={transmissions} dropDownName={'КПП'} setChosen={setSelectedTransmissionAC} chosen={selectedTransmission}/>
      <AutoCompleteDropDown optionsData={steeringWheels} dropDownName={'Руль'} setChosen={setSelectedSteeringWheelAC} chosen={selectedSteeringWheel}/>

      <SelectorSplit selectorName='Цена' setMin={setMinPrice} setMax={setMaxPrice}/>
      <SelectorSplit selectorName='Год' setMin={setMinYear} setMax={setMaxYear}/>
      <SelectorSplit selectorName='Пробег' setMin={setMinMillage} setMax={setMaxMillage}/>
    </div>)
}

export default Filter