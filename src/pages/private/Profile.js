import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavbarComponent from '../../components/Navbar';

function Profile(props) {
    return props.token ? (
    <div>
      <NavbarComponent action="Log out" />
      <h1>Hello "Profile page"</h1>;
    </div>): (
    <Redirect to="/" />
  );
}

function mapStateToProps(state) {
    return {
      token: state.token
    };
  }

  export default connect(mapStateToProps, null)(Profile);
