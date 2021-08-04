import React from 'react';
import { HomePage } from './HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import { Search } from './Search/Search';
import {Login} from './auth/Login/Login';
import {Signup} from './auth/Signup/Signup';

function App() {
  return (
    <Switch>
      <Route path='/signup' component={Signup}/>
      <Route path='/login' component={Login}/>
      <Route path='/search' component={Search}/>
      <Route path='/' component={HomePage}/>
    </Switch>
  );
}

export default App;
