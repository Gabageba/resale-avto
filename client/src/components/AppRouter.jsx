import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {authRoutes, publicRoutes} from '../routes/routes';
import {useSelector} from 'react-redux';

const AppRouter = () => {
  const isAuth = useSelector(state => state.userData.isAuth)

  return (
    <Routes>
      {isAuth && authRoutes.map(({path, element}) =>
        <Route key={path} path={path} element={element}/>
      )}
      {publicRoutes.map(({path, element}) =>
        <Route key={path} path={path} element={element}/>
      )}
    </Routes>
  )
}

export default AppRouter