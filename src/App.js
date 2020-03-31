import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Guide from './Guide/Guide';
// import Login from './Login/Login';
import Header from './Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          path='/'
          component={Guide} />
        {/* <Route 
            path='/login'
            component={Login}/> */}
      </Switch>
    </div>
  );
}

export default App;
