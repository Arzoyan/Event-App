import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../containers/application/login/Login';
import HomePage from '../containers/application/homePage/HomePage';
import Registration from '../containers/application/registration/Registration';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/homePage' component={HomePage} />
            <Route path='/registration' component={Registration} />

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;

//  <Route exact path='/' component={NewsItem} />

// <Application /> 
//  <Button /> 
//  <Loading />
// <NewsItem /> 
//  <Route path="/app" component={Testing} /> 
//  <Route path='/googlemaps' component={GoogleMaps} />