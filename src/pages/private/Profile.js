import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Card, Row, Col } from 'antd';
import NavbarComponent from '../../components/Navbar';
import DummyProfileImage from '../../assets/profile_pic.png';
import './styles/profile.scss';

function Profile(props) {
  return props.token ? (
    <div className="profile-page">
      <NavbarComponent action="Log out" />
      <Row gutter={16}>
        <Col className="gutter-row" span={4}>
          <div className="gutter-box">
            <Card className="login-card">
              <img src={DummyProfileImage} alt='profile pic' />
              <h1>Hello "Profile page Content"</h1>
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className="gutter-box">
            <Card className="login-card">
              <h1>Hello "Profile form"</h1>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  ) : (
    <Redirect to="/" />
  );
}

function mapStateToProps(state) {
  return {
    token: state.token
  };
}

export default connect(mapStateToProps, null)(Profile);
