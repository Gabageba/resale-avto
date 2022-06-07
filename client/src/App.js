import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import React, {useEffect, useState} from 'react';
import {check} from './http/userAPI';
import {useDispatch, useSelector} from 'react-redux';
import {setIsAuthAC, setUserAC} from './redux/userReducer';
import Spinner from './components/Spinner/Spinner';
import {IntlProvider, useIntl} from 'react-intl';
import { LOCALES } from './i18n/locales'
import { messages } from './i18n/messages'

const App = () => {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const locale = useSelector(state => state.userData.locale)

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
    <IntlProvider locale={locale} messages={messages[locale]} defaultLocale={LOCALES.RUSSIAN}>
      <BrowserRouter>
        <div className="app-wrapper">
          <Header/>
          <AppRouter />
        </div>
      </BrowserRouter>
    </IntlProvider>
  )
}

export default App;
