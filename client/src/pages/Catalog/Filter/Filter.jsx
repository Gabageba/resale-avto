import React from 'react';
import style from './Filter.module.css'
import SelectorLong from "../../../components/Filters/SelectorLong/SelectorLong";
import SelectorSplit from "../../../components/Filters/SelectorSplit/SelectorSplit";
import SelectorShort from "../../../components/Filters/SelectorShort/SelectorShort";

const Filter = () => {
  return (
    <div className={style.filter}>
      <SelectorLong selectorName='Марка'/>
      <SelectorLong selectorName='Модель'/>
      <SelectorLong selectorName='Тип кузова'/>

      <SelectorSplit selectorName='Цена'/>
      <SelectorSplit selectorName='Год'/>
      <SelectorSplit selectorName='Пробег'/>
      <SelectorSplit selectorName='Объем'/>

      <SelectorLong selectorName='Привод'/>

      <SelectorShort selectorName='КПП'/>
      <SelectorShort selectorName='Руль'/>
    </div>)
}

export default Filter