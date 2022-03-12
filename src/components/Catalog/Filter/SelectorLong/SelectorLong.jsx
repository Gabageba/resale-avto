import React from 'react';
import style from './SelectorLong.module.css'


const SelectorLong = (props) => {
  return (
    <span>
       <input type="text" className={style.selectorLong} placeholder={props.selectorName}/>
    </span>
  )
}

export default SelectorLong