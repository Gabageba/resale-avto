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

const Filter = ({bodyTypes, brands, driveUnits, models, transmission, steeringWheel}) => {

  return (
    <div className={style.filter}>
      <AutoCompleteDropDown optionsData={brands} dropDownName={'Марка'} setChosen={setSelectedBrandAC}/>
      <AutoCompleteDropDown optionsData={models} dropDownName={'Модель'} setChosen={setSelectedModelsAC}/>
      <AutoCompleteDropDown optionsData={bodyTypes} dropDownName={'Тип кузова'} setChosen={setSelectedBodyTypeAC}/>
      <AutoCompleteDropDown optionsData={driveUnits} dropDownName={'Привод'} setChosen={setSelectedDriveUnitAC}/>
      <AutoCompleteDropDown optionsData={transmission} dropDownName={'КПП'} setChosen={setSelectedTransmissionAC}/>
      <AutoCompleteDropDown optionsData={steeringWheel} dropDownName={'Руль'} setChosen={setSelectedSteeringWheelAC}/>

      <SelectorSplit selectorName='Цена'/>
      <SelectorSplit selectorName='Год'/>
      <SelectorSplit selectorName='Пробег'/>
    </div>)
}

export default Filter