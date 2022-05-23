import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import React, {useEffect, useState} from 'react';
import {check} from './http/userAPI';
import {useDispatch} from 'react-redux';
import {setIsAuthAC, setUserAC} from './redux/userReducer';
import Spinner from './components/Spinner/Spinner';
import ErrorPopUp from './components/ErrorPopUp/ErrorPopUp';

const App = () => {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      dispatch(setUserAC(data))
      dispatch(setIsAuthAC(true))
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner/>
  }

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <AppRouter />
      </div>
    </BrowserRouter>
  )
}

export default App;
