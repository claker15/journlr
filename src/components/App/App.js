import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import HomeComponent from '../Home/Home'
import Nav from '../Nav/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <BrowserRouter>
        <Route path='/' component={HomeComponent}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
