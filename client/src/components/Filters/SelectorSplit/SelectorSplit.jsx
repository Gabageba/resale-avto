import React from 'react';
import style from './SelectorSplit.module.css'

const SelectorSplit = ({selectorName, setMin, setMax, min, max}) => {
  return (
    <span className={style.selectorSplit}>
      <input type="text" onChange={e => setMin(e.target.value)} value={min} className={style.selectorLeft} placeholder={`${selectorName}, от`}/>
      <input type="text" onChange={e => setMax(e.target.value)} value={max} className={style.selectorRight} placeholder="до"/>
    </span>
  )
}

export default SelectorSplit