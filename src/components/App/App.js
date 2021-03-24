import React from 'react';
import logo from '../../assets/logo.svg';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Nav from "../Nav/Nav"
import HomeComponent from '../Home/Home'
import Sidebar from '../Sidebar/sidebar'

function App() {
  return (
    <div>
      <Nav></Nav>
      <Sidebar></Sidebar>
      <div className="router">
        <BrowserRouter>
          <Route path='/' component={HomeComponent}></Route>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
