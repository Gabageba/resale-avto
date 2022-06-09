import React from 'react';
import style from './CarCards.module.css'
import AdditionalSpec from './AdditionalSpec/AdditionalSpec';
import {useDispatch, useSelector} from 'react-redux';
import {setCarsAC, setTotalCountAC} from '../../redux/carsReducer';
import {deleteCar} from '../../http/carAPI';
import {useNavigate} from 'react-router-dom';
import {CAR_PAGE_ROUTE} from '../../utils/const';
import {addInHistory} from '../../http/historyAPI';
import {useIntl} from 'react-intl';

const CarCards = ({carData, isDel}) => {

  let brand = useSelector(state => state.specifications.brands).filter((b) => b.id === carData.brandId)
  let model = useSelector(state => state.specifications.models).filter((m) => m.id === carData.modelId)
  const limit = useSelector(state => state.cars.limit)
  const user = useSelector(state => state.userData.user)
  const currentPage = useSelector(state => state.cars.currentPage)
  const isAuth = useSelector(state => state.userData.isAuth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const intl = useIntl()

  const onDeleteClick = () => {
    deleteCar(currentPage, limit, carData.id).then(data => {
      dispatch(setTotalCountAC(data.count))
      dispatch(setCarsAC(data.rows))
    })
  }

  const fmtMillage = new Intl.NumberFormat('ru-RU').format(carData.millage);
  const fmtPrice =  new Intl.NumberFormat('ru-RU').format(carData.price);

  return (
    <div className={isDel ? style.carCardsDelete :style.carCards} key={carData.id} onClick={() => {
      if (!isDel) {
        if (isAuth){
          addInHistory(carData.id, user.mainInfo.id).then()
          navigate(CAR_PAGE_ROUTE + '/' + carData.id)
        } else {
          navigate(CAR_PAGE_ROUTE + '/' + carData.id)
        }
      }
    }}>
      {
        isDel ?
          <div className={style.close}>
            <div className={style.cross} onClick={onDeleteClick}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#c3073f">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </div>
          </div>
          : null
      }

      { brand && model ?
        <div>
          <img src={process.env.REACT_APP_API_URL + '/' + carData.img} alt={carData.name} className={style.image}/>
          <p className={brand[0].name.length + model[0].name.length >= 20 ? style.bigCarName : style.carName}>{`${brand[0].name } ${model[0].name}`}</p>
          <p className={style.year}>{carData.year}</p>
          <div className={style.otherSpec}>
            <AdditionalSpec nameSpec={intl.formatMessage({id: 'car_millage'})} dataSpec={`${fmtMillage} км`}/>
            <AdditionalSpec nameSpec={intl.formatMessage({id: 'car_owners'})} dataSpec={carData.owners}/>
          </div>
          <p className={style.price}>{fmtPrice} ₽</p>
        </div>
        : null}
    </div>
  )
}

export default CarCards