import React from 'react';
import style from './SelectorSplit.module.css'

const SelectorSplit = (props) => {
  return (
    <span className={style.selectorSplit}>
      <input type="text" className={style.selectorLeft} placeholder={`${props.selectorName}, от`}/>
      <input type="text" className={style.selectorRight} placeholder="до"/>
    </span>
  )
}

export default SelectorSplit