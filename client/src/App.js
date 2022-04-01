import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Catalog from './components/Catalog/Catalog';
import Contacts from './components/Contacts/Contacts';
import TradeIn from './components/ Services/TradeIn/TradeIn';
import Commission from './components/ Services/Commission/Commission';
import Detailing from './components/ Services/Detailing/Detailing';


const App = (props) => {
  return (
    <BrowserRouter >
      <div className="app-wrapper">
        <Header/>
        <Routes >
          <Route path='/' element={<Main state={props.state}/>}/>
          <Route path='/catalog/*' element={<Catalog state={props.state}/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/trade-in' element={<TradeIn/>}/>
          <Route path='/commission' element={<Commission/>}/>
          <Route path='/detailing' element={<Detailing/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
