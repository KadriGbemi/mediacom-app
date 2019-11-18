import React from 'react';
import { Layout, Menu, Input } from 'antd';

const { Header } = Layout;
const { Search } = Input;

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
        defaultSelectedKeys={[props.defaultSelected]}
        style={{ lineHeight: '62px', color: 'rgba(0, 0, 0, 0.65)' }}
      >
        <Menu.Item key="1">Main</Menu.Item>
        <Menu.Item key="2">Stories</Menu.Item>
        {props.type ? (
          <Menu.Item disabled>
            <Search
              placeholder="Enter your search"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />{' '}
          </Menu.Item>
        ) : null}
        <Menu.Item key="3">Profile</Menu.Item>
        <Menu.Item key="4">Login</Menu.Item>
      </Menu>
    </Header>
  );
}

export default NavbarComponent;
