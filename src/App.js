import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Guide from './Guide/Guide';
import Add from './Add/Add';
import NotFound from './NotFound/NotFound';
import Header from './Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path='/'
          component={Guide} />
        <Route
          exact
          path='/add'
          component={Add} />
        <Route
          component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
