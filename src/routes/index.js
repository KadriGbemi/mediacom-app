import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/public/Login';
import MainPage from '../pages/private/Main';
import ProfilePage from '../pages/private/Profile';
import StoryPage from '../pages/private/Story';
import PrivateRoute from './private';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <PrivateRoute path="/main">
          <MainPage />
        </PrivateRoute>
        <PrivateRoute path="/story">
          <StoryPage />
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <ProfilePage />
        </PrivateRoute>
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
