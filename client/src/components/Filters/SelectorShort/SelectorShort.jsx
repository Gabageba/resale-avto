import React from 'react';
import style from './SelectorShort.module.css'

const SelectorShort = (props) => {
  return (
    <span>
      <input type="text" className={style.selectorShort} placeholder={props.selectorName}/>
    </span>
  )
}

export default SelectorShort