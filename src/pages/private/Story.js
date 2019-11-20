import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavbarComponent from '../../components/Navbar';

function Story(props) {
    return props.token ? (
    <div>
      <NavbarComponent action="Log out" />
      <h1>Hello, {props.name}</h1>;
    </div>): (
    <Redirect to="/" />
  );
}

function mapStateToProps(state) {
    return {
      token: state.token
    };
  }

  export default connect(mapStateToProps, null)(Story);
