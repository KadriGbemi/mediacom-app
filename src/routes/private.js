import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        rest.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function mapStateToProps(state) {
  return {
    token: state.token
  };
}

export default connect(mapStateToProps, null)(PrivateRoute);
