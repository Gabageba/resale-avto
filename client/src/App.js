import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import {useEffect} from "react";
import {check} from "./http/userAPI";
import ErrorPage from './pages/ErrorPage/ErrorPage';

const App = (props) => {

  useEffect(() => {
    check().then(data => {
      props.state.user.userData = data
      props.state.user.isAuth = true
    })
  }, [])

  console.log(props)

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <AppRouter/>
        {/*<ErrorPage/>*/}
      </div>
    </BrowserRouter>
  )
}

export default App;
