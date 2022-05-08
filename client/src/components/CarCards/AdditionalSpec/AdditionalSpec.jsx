import React from 'react';
import style from './AdditionalSpec.module.css'

const AdditionalSpec = (props) => {
  return (
    <div>
      <p className={style.nameSpec}>{props.nameSpec}</p>
      <p className={style.dataSpec}>{props.dataSpec}</p>
    </div>
  )
}

export default AdditionalSpec