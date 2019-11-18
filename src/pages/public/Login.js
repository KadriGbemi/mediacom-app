import React from 'react';
import { Layout, Card, Typography } from 'antd';

import LoginFormComponent from '../../components/form/Login';
import NavbarComponent from '../../components/Navbar';

import './Login.scss';

const { Content } = Layout;
const { Title, Text } = Typography;

function LoginPage(props) {
  return (
    <Layout className="layout">
      <NavbarComponent defaultSelected='4'/>
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
    </Layout>
  );
}

export default LoginPage;
