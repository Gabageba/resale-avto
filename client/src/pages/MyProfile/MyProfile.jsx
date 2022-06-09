import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import avatar from '../../assets/defaultavatar1.png'
import style from './MyProfile.module.css'
import ProfileSettingModal from '../../components/Modals/ProfileSettingModal/ProfileSettingModal';
import Lock from '../../components/Lock/Lock';
import ErrorPopUp from '../../components/ErrorPopUp/ErrorPopUp';
import AvatarLoadInput from '../../components/AvatarLoadInput/AvatarLoadInput';
import {FormattedMessage} from 'react-intl';
import {fetchHistory} from '../../http/historyAPI';
import {setHistoryAC, setTotalCountHistAC} from '../../redux/historyReducer';
import Spinner from '../../components/Spinner/Spinner';
import {fetchBrands, fetchModels, fetchRecommendation} from '../../http/carAPI';
import {setRecommendation} from '../../redux/carsReducer';
import CarCards from '../../components/CarCards/CarCards';
import {setBrandsAC, setFilterModels, setModelsAC} from '../../redux/carSpecReducer';

const MyProfile = () => {
  const user = useSelector(state => state.userData.user)
  const recommendation = useSelector(state => state.cars.carRecommendation)
  const history = useSelector(state => state.history.historyData)
  const [profileSettingActive, setProfileSettingActive] = useState(false)
  const [errorActive, setErrorActive] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [editAvatar, setEditAvatar] = useState(false)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()


  useEffect(() => {
    fetchBrands().then(data => dispatch(setBrandsAC(data)))
    fetchModels().then(data => {
      dispatch(setModelsAC(data))
      dispatch(setFilterModels(data))
    })
    fetchRecommendation().then(data => {
      dispatch(setRecommendation(data))
    })
    fetchHistory(user.mainInfo.id, 1, 3).then(data => {
      dispatch(setHistoryAC(data.rows))
      dispatch(setTotalCountHistAC(data.count))
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner/>
  }


  return (
    <div>
      <ProfileSettingModal active={profileSettingActive} setActive={setProfileSettingActive}
                           setErrorActive={setErrorActive} setErrorText={setErrorText}/>
      <ErrorPopUp active={errorActive} setActive={setErrorActive} errorText={errorText}/>
      {user.additionalInfo.isActivate ? null : <Lock/>}
      <div className={style.profileInfo}>
        {/*onMouseLeave={() => setEditAvatar(false)}*/}
        <div className={style.img} onMouseEnter={() => setEditAvatar(true)} onMouseLeave={() => setEditAvatar(false)}>
          <img className={style.profileImg}
               src={user.additionalInfo.avatar ? process.env.REACT_APP_API_URL + '/' + user.additionalInfo.avatar : avatar}
               alt=""/>
          <AvatarLoadInput editAvatar={editAvatar} userId={user.mainInfo.id}/>
        </div>
        <div className={style.infoWrapper}>
          <p className={style.name}>{user.additionalInfo.name}</p>
          <div className={style.info}>
            <p className={style.headerInfo}>Email:</p>
            <p className={style.contentInfo}>{user.mainInfo.email}</p>
          </div>
          <div className={style.info}>
            <p className={style.headerInfo}><FormattedMessage id="profile_role"/></p>
            <p className={style.contentInfo}>{user.mainInfo.role === 'ADMIN' ? <FormattedMessage id="profile_admin"/> :
              <FormattedMessage id="profile_user"/>}</p>
          </div>
          <button className={style.settingButton} onClick={() => setProfileSettingActive(true)}><FormattedMessage
            id="profile_setting"/></button>
        </div>
      </div>
      {
        recommendation.length === 0 ? null :
          <div className={style.carHistory}>
            <h1 className={style.historyHeader}><FormattedMessage id="profile_recommend"/></h1>
            <div className={style.recommendation}>
              {
                recommendation.map(rec =>  (
                  <CarCards carData={rec}/>
                ))
              }
            </div>
          </div>
      }

    </div>
  )
};

export default MyProfile;