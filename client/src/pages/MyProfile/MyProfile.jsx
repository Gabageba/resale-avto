import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import avatar from '../../assets/defaultavatar1.png'
import style from './MyProfile.module.css'
import ProfileSettingModal from '../../components/Modals/ProfileSettingModal/ProfileSettingModal';
import Lock from '../../components/Lock/Lock';
import ErrorPopUp from '../../components/ErrorPopUp/ErrorPopUp';
import AvatarLoadInput from '../../components/AvatarLoadInput/AvatarLoadInput';

const MyProfile = () => {
  const user = useSelector(state => state.userData.user)
  const [profileSettingActive, setProfileSettingActive] = useState(false)
  const [errorActive, setErrorActive] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [editAvatar, setEditAvatar] = useState(false)


  return (
    <div>
      <ProfileSettingModal active={profileSettingActive} setActive={setProfileSettingActive} setErrorActive={setErrorActive} setErrorText={setErrorText}/>
      <ErrorPopUp active={errorActive} setActive={setErrorActive} errorText={errorText}/>
      {user.additionalInfo.isActivate ? null : <Lock/>}
      <div className={style.profileInfo}>
        {/*onMouseLeave={() => setEditAvatar(false)}*/}
        <div className={style.img} onMouseEnter={() => setEditAvatar(true)} onMouseLeave={() => setEditAvatar(false)}>
          <img className={style.profileImg} src={user.additionalInfo.avatar ? process.env.REACT_APP_API_URL + user.additionalInfo.avatar : avatar} alt=""/>
          <AvatarLoadInput editAvatar={editAvatar} userId={user.mainInfo.id}/>
        </div>
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
          <button className={style.settingButton} onClick={() => setProfileSettingActive(true)}>настроить профиль</button>
        </div>
      </div>
      <div className={style.carHistory}>
        <h2 className={style.historyHeader}>История автомобилей: </h2>
      </div>
    </div>
  )
};

export default MyProfile;