import React from 'react';
import './App.css';
import Feed from './Components/Feed/Feed';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route path="/*" component={() => <Redirect to='/' />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
