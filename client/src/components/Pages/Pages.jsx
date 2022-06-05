import React from 'react';
import {useDispatch} from 'react-redux';
import style from './Pages.module.css'

const Pages = ({limit, currentPage, totalCount, setPage}) => {
  const dispatch = useDispatch()
  const pageCount = Math.ceil(totalCount / limit)
  const pages = []
  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1)
  }

  return (

    <div className={style.pages}>
      {
        pages.length > 1 ?
              pages.map(page => {
                  return (
                    <button key={page}
                            className={page === currentPage ? style.active : style.unActive}
                            onClick={() => dispatch(setPage(page))}>
                      {page}
                    </button>
                  )
                }
              )
           : null
      }
    </div>
  );
};

export default Pages;