import React from 'react';
import style from './Filter.module.css'
import SelectorLong from './SelectorLong/SelectorLong';
import SelectorSplit from './SelectorSplit/SelectorSplit';
import SelectorShort from './SelectorShort/SelectorShort';

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