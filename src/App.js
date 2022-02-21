import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import React from 'react';


function App(props) {
  return (
    <div className="app-wrapper">
      <Header/>
      <Main state={props.state}/>
    </div>
  );
}

export default App;
