import React, {useState} from 'react';
import style from './Filter.module.css'
import SelectorSplit from "../../../components/Filters/SelectorSplit/SelectorSplit";
import AutoCompleteDropDown from '../../../components/AutoCompleteDropDown/AutoCompleteDropDown';

const Filter = ({bodyTypes, brands, driveUnits, models, transmission, steeringWheel}) => {
  const [chosenModel, setChosenModel] = useState('')
  // console.log(chosenModel)


  console.log(models)
  console.log(brands)
  return (
    <div className={style.filter}>
      <AutoCompleteDropDown optionsData={brands} dropDownName={'Марка'}/>
      <AutoCompleteDropDown optionsData={models} dropDownName={'Модель'} />
      <AutoCompleteDropDown optionsData={bodyTypes} dropDownName={'Тип кузова'}/>
      <AutoCompleteDropDown optionsData={driveUnits} dropDownName={'Привод'}/>
      <AutoCompleteDropDown optionsData={transmission} dropDownName={'КПП'}/>
      <AutoCompleteDropDown optionsData={steeringWheel} dropDownName={'Руль'}/>

      <SelectorSplit selectorName='Цена'/>
      <SelectorSplit selectorName='Год'/>
      <SelectorSplit selectorName='Пробег'/>



    </div>)
}

export default Filter