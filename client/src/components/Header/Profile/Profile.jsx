import React from 'react';
import style from './Profile.module.css'
import user from '../../../assets/user.png'

const Profile = () =>{
  return (
    <img className={style.icon} src={user} alt="User"/>
  )
}

export default Profile