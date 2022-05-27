import React from 'react';
import style from './ShowSetting.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {setIsDel} from '../../../redux/carsReducer';

const ShowSetting = () => {

  const user = useSelector(state => state.userData.user)
  const isAuth = useSelector(state => state.userData.isAuth)
  const isDel = useSelector(state => state.cars.isDel)
  const dispatch = useDispatch()

  return (
    <div className={style.showSetting}>
      <button className={style.sort}>Сортировать по</button>
      <button className={style.view}>Вид</button>
      {isAuth ?
        user.mainInfo.role === 'ADMIN' && user.additionalInfo.isActivate?
          <div className={style.edit} onClick={() => dispatch(setIsDel(!isDel))}>
            <svg
              width="46"
              height="46"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#494949"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </div> : null
        :
        null
      }



    </div>
  )
}

export default ShowSetting