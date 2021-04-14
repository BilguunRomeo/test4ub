import React, { } from 'react';
import Ebu from '../src/components/ebu'
import Ebe from '../src/components/ebe'
import Result from '../src/components/result'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router basename="/" >
      <div className="App">
        <Switch>
          <Route path="/ebe">
            <Ebe />
          </Route>
          <Route path="/ebu">
            <Ebu />
          </Route>
          <Route path="/ebe/en">
            <Ebe />
          </Route>
          <Route path="/ebu/en">
            <Ebu />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;