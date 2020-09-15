import React from 'react';
import logo from '../../assets/logo.svg';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import HomeComponent from '../Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={HomeComponent}></Route>
    </BrowserRouter>
    
  );
}

export default App;
