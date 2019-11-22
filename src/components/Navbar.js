import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Input } from 'antd';
import { connect } from 'react-redux';
import { login, logout, getEverything } from '../_actions';

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
      <div>
        <Link to="/main" style={{ color: 'rgba(0, 0, 0, 0.70)' }}>
          <strong>MediaCom</strong>
        </Link>
      </div>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={[props.defaultSelected]}
        style={{ lineHeight: '62px', color: 'rgba(0, 0, 0, 0.65)' }}
      >
        <Menu.Item key="1">
          <Link to="/main">Main</Link>
        </Menu.Item>
        {props.type ? (
          <Menu.Item disabled>
            <Search
              placeholder="Enter your search"
              onSearch={value => props.getEverything(value, props.token)}
              style={{ width: 200 }}
            />{' '}
          </Menu.Item>
        ) : null}
        <Menu.Item key="2">
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item
          key="3"
          onClick={e => {
            if (props.action === 'Log out') {
              props.logout();
            }
          }}
        >
          {props.action}
        </Menu.Item>
      </Menu>
    </Header>
  );
}

function mapStateToProps(state) {
  return {
    token: state.token
  };
}

export default connect(mapStateToProps, { login, logout, getEverything })(
  NavbarComponent
);
