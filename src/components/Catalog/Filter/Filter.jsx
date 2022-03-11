import React from 'react';
import style from './Filter.module.css'

const Filter = () => {
  return (
    <div className={style.filter}>
      <input type="text" name="brand" className={style.selectedLong} placeholder="Марка"/>
      <input type="text" name="brand" className={style.selectedLong} placeholder="Модель"/>
      <input type="text" name="brand" className={style.selectedLong} placeholder="Тип кузова"/>
      <span className={style.groupShort}>
        <input type="text" name="brand" className={style.selectedShort} placeholder="Цена, от"/>
        <input type="text" name="brand" className={style.selectedShort} placeholder="до"/>
      </span>
      <span className={style.groupShort}>
        <input type="text" name="brand" className={style.selectedShort} placeholder="Год, от"/>
        <input type="text" name="brand" className={style.selectedShort} placeholder="до"/>
      </span>
      <span className={style.groupShort}>
        <input type="text" name="brand" className={style.selectedShort} placeholder="Пробег, от"/>
        <input type="text" name="brand" className={style.selectedShort} placeholder="до"/>
      </span>
      <span className={style.groupShort}>
        <input type="text" name="brand" className={style.selectedShort} placeholder="Объем, от"/>
        <input type="text" name="brand" className={style.selectedShort} placeholder="до"/>
      </span>
      <input type="text" name="brand" className={style.selectedLong} placeholder="Привод"/>
      <span className={style.groupShort}>
        <input type="text" name="brand" className={style.selectedShort} placeholder="КПП"/>
        <input type="text" name="brand" className={style.selectedShort} placeholder="Руль"/>
      </span>
    </div>)
}

export default Filter