import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Layout, Card, Typography } from 'antd';

import LoginFormComponent from '../../components/form/Login';
import NavbarComponent from '../../components/Navbar';
import AlertMessageComponent from '../../components/message/alert';

import './Login.scss';

const { Content } = Layout;
const { Title, Text } = Typography;

function LoginPage(props) {
  return props.token ? (
    <Redirect to="/main" />
  ) : ( <Layout className="layout">
      <NavbarComponent defaultSelected="4" action="Log in" />
      <div className="layout-container">
        <AlertMessageComponent />
        <Content className="login-content">
          <Card className="login-card">
            <div className="left-grid">
              <Title level={3} className="left-grid-text">
                Search worldwide news with code
              </Title>
              <Text>
                Get breaking news headlines, and search for articles from over
                30,000 news sources and blogs with our news API
              </Text>
            </div>
            <div className="right-grid">
              <LoginFormComponent />
            </div>
          </Card>
        </Content>
      </div>
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    token: state.token
  };
}

export default connect(mapStateToProps, null)(LoginPage);
