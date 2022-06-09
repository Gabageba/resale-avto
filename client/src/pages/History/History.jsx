import React, {useEffect, useState} from 'react';
import style from './History.module.css'
import InLineCarCards from '../../components/InLineCarCards/InLineCarCards';
import {useDispatch, useSelector} from 'react-redux';
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
import {deleteOneInHistory, fetchHistory} from '../../http/historyAPI';
import {setCurrentPageHistAC, setHistoryAC, setTotalCountHistAC} from '../../redux/historyReducer';
import Lock from '../../components/Lock/Lock';
import {FormattedMessage} from 'react-intl';


const History = () => {

  const user = useSelector(state => state.userData.user)
  const page = useSelector(state => state.history.currentPage)
  const limit = useSelector(state => state.history.limit)
  const totalCount = useSelector(state => state.history.totalCount)
  const history = useSelector(state => state.history.historyData)
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
    fetchHistory(user.mainInfo.id, page, limit).then(data => {
      dispatch(setHistoryAC(data.rows))
      dispatch(setTotalCountHistAC(data.count))
    }).finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    setLoading(true)
    fetchHistory(user.mainInfo.id, page, limit).then(data => {
      dispatch(setHistoryAC(data.rows))
      dispatch(setTotalCountHistAC(data.count))
    }).finally(() => setLoading(false))
  }, [page])

  if (loading) {
    return <Spinner/>
  }

  const onDeleteClick = (carId) => {
    deleteOneInHistory(user.mainInfo.id, carId, limit, 1).then(data => {
      dispatch(setHistoryAC(data.rows))
      dispatch(setTotalCountHistAC(data.count))
    })
  }


  return (
    <div className={style.favorite}>
      {user.additionalInfo.isActivate ? null : <Lock/>}
      <h1 ><FormattedMessage id='history_head' /></h1>
      {
        history.length === 0 ?
          <div className={style.error}>
            <div className={style.errorText}><FormattedMessage id='history_error' /></div>
          </div>
          :
          <div className={style.cars}>
            {
              history.map(car => (
                <InLineCarCards key={car.id} carData={car} isDel={true} onDel={onDeleteClick}/>
              ))}
          </div>
      }
      <Pages currentPage={page} totalCount={totalCount} limit={limit} setPage={setCurrentPageHistAC}/>
      <Footer/>
    </div>
  );
};

export default History;