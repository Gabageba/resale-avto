import React from 'react';
import style from './Contacts.module.css'
import Info from './Info/Info';
import map from './../../../assets/Map.png'

const Contacts = () => {
  return (
    <div>
      <h1 className="header-info">Контакты</h1>
      <div className={style.contacts}>
        {/*<Map />*/}
        <img src={map} alt="map"/>
        <div className={style.info}>
          <Info nameInfo={'Телефон'} dataInfo={'+7 913 955 62-12'}/>
          <Info nameInfo={'Адресс'} dataInfo={`Новосибирск, Северный проезд, 7`}/>
        </div>
      </div>
    </div>
  )
}

export default Contacts