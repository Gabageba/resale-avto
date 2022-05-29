import React from 'react';
import style from './SelectorSplit.module.css'

const SelectorSplit = ({selectorName, setMin, setMax}) => {
  return (
    <span className={style.selectorSplit}>
      <input type="text" onChange={e => setMin(e.target.value)} className={style.selectorLeft} placeholder={`${selectorName}, от`}/>
      <input type="text" onChange={e => setMax(e.target.value)} className={style.selectorRight} placeholder="до"/>
    </span>
  )
}

export default SelectorSplit