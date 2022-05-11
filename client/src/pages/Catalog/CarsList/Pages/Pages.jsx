import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import style from './Pages.module.css'
import {setCurrentPageAC} from '../../../../redux/carsReducer';

const Pages = () => {
  const limit = useSelector(state => state.cars.limit)
  const totalCount = useSelector(state => state.cars.totalCount)
  const currentPage = useSelector(state => state.cars.currentPage)
  const dispatch = useDispatch()
  const pageCount = Math.ceil(totalCount / limit)
  const pages = []
  for (let i = 0; i < pageCount; i++ ) {
    pages.push(i + 1)
  }
  return (
    <div className={style.pages}>
      {pages.map(page => {
        return (
          <button key={page}
                className={page === currentPage ? style.active : style.unActive}
                onClick={() => dispatch(setCurrentPageAC(page))}>
            {page}
          </button>
        )
        }
      )}
    </div>
  );
};

export default Pages;