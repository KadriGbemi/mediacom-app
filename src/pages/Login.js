import React from 'react';

import { Layout, Menu, Card, Typography } from 'antd';
import LoginFormComponent from '../components/form/Login';

import './Login.scss';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

function LoginPage(props) {
  return (
    <Layout className="layout">
      <Header
        style={{
          backgroundColor: 'white ',
          borderBottom: '1px solid #e8e8e8',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div className="logo">
        <strong>MediaCom</strong>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['4']}
          style={{ lineHeight: '62px' }}
        >
          <Menu.Item key="1">Main</Menu.Item>
          <Menu.Item key="2">Stories</Menu.Item>
          <Menu.Item key="3">Profile</Menu.Item>
          <Menu.Item key="4">Login</Menu.Item>
        </Menu>
      </Header>
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
