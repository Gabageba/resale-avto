import React from 'react';
import style from './Filter.module.css'
import SelectorSplit from "../../../components/Filters/SelectorSplit/SelectorSplit";
import SelectorShort from "../../../components/Filters/SelectorShort/SelectorShort";
import AutoCompleteDropDown from '../../../components/AutoCompleteDropDown/AutoCompleteDropDown';

const Filter = ({bodyTypes, brands, driveUnits, models}) => {
  return (
    <div className={style.filter}>
      <AutoCompleteDropDown optionsData={brands} dropDownName={'Марка'}/>
      <AutoCompleteDropDown optionsData={models} dropDownName={'Модель'}/>
      <AutoCompleteDropDown optionsData={bodyTypes} dropDownName={'Тип кузова'}/>


      <SelectorSplit selectorName='Цена'/>
      <SelectorSplit selectorName='Год'/>
      <SelectorSplit selectorName='Пробег'/>
      <SelectorSplit selectorName='Объем'/>

      <AutoCompleteDropDown optionsData={driveUnits} dropDownName={'Привод'}/>

      <div>
        <SelectorShort selectorName='КПП'/>
        <SelectorShort selectorName='Руль'/>
      </div>
    </div>)
}

export default Filter