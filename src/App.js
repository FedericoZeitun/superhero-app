import './App.css';
import Login from './components/login'
import Home from './components/Home'
import React from 'react';
import { getApi }  from './Api'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

function App() {
  
  

  return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/home" component={Home}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
