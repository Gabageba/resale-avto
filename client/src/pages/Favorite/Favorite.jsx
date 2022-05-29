import React, {useEffect, useState} from 'react';
import style from './Favorite.module.css'
import InLineCarCards from '../../components/InLineCarCards/InLineCarCards';
import {fetchFavourite} from '../../http/favouriteAPI';
import {useDispatch, useSelector} from 'react-redux';
import {setFavoritesAC, setTotalCountFavAC} from '../../redux/favoritesReducer';
import CarCards from '../../components/CarCards/CarCards';
import Spinner from '../../components/Spinner/Spinner';
import {fetchBrands, fetchDriveUnits, fetchModels, fetchTransmission} from '../../http/carAPI';
import {
  setBrandsAC,
  setDriveUnitsAC,
  setFilterModels,
  setModelsAC,
  setTransmissionsAC
} from '../../redux/carSpecReducer';

const Favorite = () => {

  const user = useSelector(state => state.userData.user)
  const page = useSelector(state => state.favorite.currentPage)
  const limit = useSelector(state => state.favorite.limit)
  const favorites = useSelector(state => state.favorite.favoritesData)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()


  useEffect(() => {
    fetchBrands().then(data => dispatch(setBrandsAC(data)))
    fetchModels().then(data => {
      dispatch(setModelsAC(data))
      dispatch(setFilterModels(data))
    })
    fetchDriveUnits().then(data => dispatch(setDriveUnitsAC(data)))
    fetchTransmission().then(data => dispatch(setTransmissionsAC(data)))
    fetchFavourite(user.mainInfo.id,page,limit).then(data => {
      dispatch(setFavoritesAC(data.rows))
      dispatch(setTotalCountFavAC(data.count))
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner/>
  }

    return (
    <div className={style.favorite}>
      <h1>избранное</h1>
      {
        favorites.length === 0 ?
          <div className={style.error}>
            <div className={style.errorText}>Вы не добавили ни один автомобиль в избранное...</div>
          </div>
          :
          <div className={style.cars}>
            {
              favorites.map(car=>(
                <InLineCarCards key={car.id} carData={car} isDel={true}/>
              ))}
          </div>
      }

    </div>
  );
};

export default Favorite;