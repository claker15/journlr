import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import HomeComponent from '../Home/Home'
import Nav from '../Nav/Nav'
import EntryContainer from '../EntryContainer/EntryContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <BrowserRouter>
        <Route exact path='/' component={HomeComponent}></Route>
        <Route path='/create' component={EntryContainer}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
