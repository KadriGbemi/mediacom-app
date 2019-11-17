import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

function NavbarComponent(props) {
  return (
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
  );
}

export default NavbarComponent