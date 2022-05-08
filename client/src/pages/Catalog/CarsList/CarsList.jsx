import React, {useEffect} from 'react';
import style from './CarsList.module.css'
import CarCards from "../../../components/CarCards/CarCards";
import {useDispatch, useSelector} from 'react-redux';
import {fetchCars} from '../../../http/carAPI';
import {setCarsAC, setCurrentPage, setTotalCountAC} from '../../../redux/carsReducer';



const Cars = () => {

  const carsData = useSelector(state => state.cars.carsData)
  const dispatch = useDispatch()
  const totalCount = useSelector(state => state.cars.totalCount)
  const currentPage = useSelector(state => state.cars.currentPage)

  const onPageChange = (p) => {
    dispatch(setCurrentPage(p))
    fetchCars(currentPage, 9).then(data => {
      dispatch(setTotalCountAC(data.count))
      dispatch(setCarsAC(data.rows))
    })
  }

  useEffect(() => {
    fetchCars(1, 9).then(data => {
      dispatch(setTotalCountAC(data.count))
      dispatch(setCarsAC(data.rows))
    })
  },[])

  let pagesCount = Math.ceil(totalCount / 9)

  let pages = []
  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1)
  }


  return (
    <div className={style.cars}>
      {carsData.map(car=>(
        <CarCards key={car.id} carData={car} />
      ))}
      <div>
        {pages.map(p => {
          return (<span key={p}
                        className={currentPage === p && style.selectedPage}
                        onClick={() => {
                          onPageChange(p)
                        }}
          >{p}</span>)
        })}
      </div>
    </div>
  )
}

export default Cars