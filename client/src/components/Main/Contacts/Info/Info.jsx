import React from 'react';
import style from './Info.module.css'

const Info = (props) => {
  return (
    <div>
      <p className={style.name}>{props.nameInfo}</p>
      <p className={style.data}>{props.dataInfo}</p>
    </div>
  )
}

export default Info