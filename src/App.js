import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Catalog from './components/Catalog/Catalog';
import Contacts from './components/Contacts/Contacts';
import Services from './components/ Services/ Services';


const App = (props) => {
  return (
    <BrowserRouter >
      <div className="app-wrapper">
        <Header/>
        <Routes >
          <Route path='/main' element={<Main state={props.state}/>}/>
          <Route path='/catalog/*' element={<Catalog/>}/>
          <Route path='/services/*' element={<Services/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
