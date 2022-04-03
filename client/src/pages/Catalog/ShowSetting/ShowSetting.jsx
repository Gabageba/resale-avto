import React from 'react';
import style from './ShowSetting.module.css'

const ShowSetting = () => {
  return (
    <div className={style.showSetting}>
      <button className={style.sort}>Сортировать по</button>
      <button className={style.view}>Вид</button>
    </div>
  )
}

export default ShowSetting