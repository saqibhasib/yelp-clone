import React from 'react';
import { HomePage } from './HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import { Search } from './Search/Search';

function App() {
  return (
    <Switch>
      <Route path='/search' component={Search}/>
      <Route path='/' component={HomePage}/>
    </Switch>
  );
}

export default App;
