import React from 'react';
import style from './Banner.module.css'

const Banner = () => {
  return (
    <div className={style.banner}>
      <h1 className={style.fill}>Автосалон</h1>
      <h1 className={style.stroke}>Resale Avto</h1>
      <p className={style.slogan}>Мы продвем только "чистые" автомобили</p>
    </div>
  )
}

export default Banner