import React, {useEffect, useState} from 'react';
import style from './Favorite.module.css'
import InLineCarCards from '../../components/InLineCarCards/InLineCarCards';
import {deleteAndFetchFavorite, fetchFavourite} from '../../http/favouriteAPI';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentPageFavAC, setFavoritesAC, setTotalCountFavAC} from '../../redux/favoritesReducer';
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
import Pages from '../../components/Pages/Pages';
import Footer from '../../components/Footer/Footer';

const Favorite = () => {

  const user = useSelector(state => state.userData.user)
  const page = useSelector(state => state.favorite.currentPage)
  const limit = useSelector(state => state.favorite.limit)
  const totalCount = useSelector(state => state.favorite.totalCount)
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

  useEffect(() => {
    fetchFavourite(user.mainInfo.id,page,limit).then(data => {
      dispatch(setFavoritesAC(data.rows))
      dispatch(setTotalCountFavAC(data.count))
    })
  }, [page])

  if (loading) {
    return <Spinner/>
  }

  const onDeleteClick = (carId) => {
    deleteAndFetchFavorite(user.mainInfo.id, carId, 1, limit).then(data => {
      dispatch(setFavoritesAC(data.rows))
      dispatch(setTotalCountFavAC(data.count))
    })
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
                <InLineCarCards key={car.id} carData={car} isDel={true} onDel={onDeleteClick}/>
              ))}
          </div>
      }
      <Pages currentPage={page} totalCount={totalCount} limit={limit} setPage={setCurrentPageFavAC}/>
      <Footer/>
    </div>
  );
};

export default Favorite;