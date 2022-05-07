import React from 'react';
import {useSelector} from 'react-redux';
import avatar from '../../assets/defaultavatar.png'
import style from './MyProfile.module.css'

const MyProfile = () => {
  const user = useSelector(state => state.userData.user)

  return (
    <div>
      <div className={style.profileInfo}>
        <img className={style.profileImg} src={user.additionalInfo.avatar || avatar} alt=""/>
        <div className={style.infoWrapper}>
          <p className={style.name}>{user.additionalInfo.name}</p>
          <div className={style.info}>
            <p className={style.headerInfo}>Email:</p>
            <p className={style.contentInfo}>{user.mainInfo.email}</p>
          </div>
          <div className={style.info}>
            <p className={style.headerInfo}>Роль:</p>
            <p className={style.contentInfo}>{user.mainInfo.role === 'ADMIN' ? 'Администратор' : 'Пользователь'}</p>
          </div>
          <button className={style.settingButton}>настроить профиль</button>
        </div>
      </div>
      <div className={style.carHistory}>
        <h2 className={style.historyHeader}>История автомобилей: </h2>
      </div>
    </div>
  )
};

export default MyProfile;