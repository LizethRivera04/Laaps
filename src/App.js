import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterForm from './components/LogForm/RegisterForm';
import LogInForm from './components/LogForm/LogInForm';

function App() {
  return (
    <Fragment>
      <Header/>
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <LogInForm />
            </Route>
            <Route path="/register">
              <RegisterForm />
            </Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
