import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterForm from './components/LogForm/RegisterForm';
import LogInForm from './components/LogForm/LogInForm';
import RegCar from './components/RegisterCar/RegisterCar';
import ServiceRequest from './components/ServiceRequest/ServiceRequest'
import ServiceRequestClient from './components/ServiceRequest/ServiceRequestClient_1';
import AddCar from './components/AddCar/AddCar';

function App() {
  return (
    <Fragment>
      <Header />
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <LogInForm />
            </Route>
            <Route path="/register">
              <RegisterForm />
            </Route>
            <Route path="/regcar">
              <RegCar />
            </Route>
            <Route path="/addcar">
              <AddCar />
            </Route>
            <Route path="/servicerequest">
              <ServiceRequest />
            </Route>
            <Route path="/servicerequestclient_1">
              <ServiceRequestClient />
            </Route>

          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
