import React, {useEffect, useState} from 'react';
import style from './OnSale.module.css'
import {NavLink} from 'react-router-dom';
import {fetchBrands, fetchModels} from '../../../http/carAPI';
import {useDispatch} from 'react-redux';
import {setBrandsAC, setModelsAC} from '../../../redux/carSpecReducer';
import Spinner from '../../../components/Spinner/Spinner';
import OnSaleCarList from './OnSaleCarList/OnSaleCarList';

const OnSale = () => {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchBrands().then(data => dispatch(setBrandsAC(data)))
    fetchModels().then(data => dispatch(setModelsAC(data)))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner/>
  }

  return (
    <div className={style.onSale}>
      <div className={style.head}>
        <h1 className="header-info">В продаже</h1>
        <NavLink to="/catalog" className={style.more}>Больше автомобилей →</NavLink>
      </div>
      <OnSaleCarList/>
    </div>
  )
}

export default OnSale