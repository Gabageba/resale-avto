import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import {useEffect} from "react";
import {check} from "./http/userAPI";

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
      </div>
    </BrowserRouter>
  )
}

export default App;
