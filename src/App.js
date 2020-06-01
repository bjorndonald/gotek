import React from 'react';
import logo from './logo.svg';
import Home from './components/HomePage/Home'; 
import Shop from './components/ShopPage/Shop';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
