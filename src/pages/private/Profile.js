import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Card, Row, Col, Typography } from 'antd';
import NavbarComponent from '../../components/Navbar';
import DummyProfileImage from '../../assets/profile_pic.png';
import ProfileFormComponent from '../../components/form/Profile.js';
import './styles/profile.scss';

const { Title, Text } = Typography;

function Profile(props) {
  return props.token && props.headlines? (
    <div>
      <NavbarComponent action="Log out" />
      <div className="profile-page">
        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 18]}>
          <Col
            className="gutter-row"
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            md={{ span: 7 }}
            lg={{ span: 7 }}
          >
            <div className="gutter-box">
              <Card className="profile-card">
                <img src={DummyProfileImage} alt="profile pic" />
                <Title level={3}>User profile</Title>
                <div>
                  {props.user.name ? (
                    <div>
                      <strong>Name:</strong> <br />
                      <Text>{props.user.name}</Text>
                      <br />
                    </div>
                  ) : null}
                  <strong>Email:</strong> <br />
                  <Text>{props.user.email}</Text>
                  <br />
                  <strong>Token:</strong>
                  <br />
                  <Text type="secondary">{props.user.token}</Text>
                  <br />
                </div>
              </Card>
            </div>
          </Col>
          <Col
            className="gutter-row"
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            md={{ span: 17 }}
            lg={{ span: 17 }}
          >
            <div className="gutter-box">
              <Card className="profile-card">
                <ProfileFormComponent />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
}

function mapStateToProps(state) {
  return {
    token: state.token,
    user: state.user,
    headlines: state.headlines
  };
}

export default connect(mapStateToProps, null)(Profile);
