import React from 'react';
import { Row, Col, Breadcrumb, Typography, Divider, Layout } from 'antd';

import testImage from '../../assets/test-img.jpg';
import testImage2 from '../../assets/test-img2.jpg';
import NavbarComponent from '../../components/Navbar';

import './Main.scss';
import GetNewsList from '../../components/list/GetNews';
const { Title, Text } = Typography;

const DemoBox = props => (
  <p className={`height-${props.value}`}>{props.children}</p>
);
function MainPage() {
  return (
    <div className="main-page">
      <NavbarComponent defaultSelected="1" type="mainPage" />
      <div className="main-page-content">
        <Breadcrumb className="main-page-breadcrumb">
          <Breadcrumb.Item>Top headlines</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Sports</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Entertainment</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Travel</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Foods</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Games</Breadcrumb.Item>
        </Breadcrumb>
        <Row type="flex" justify="space-between" align="top">
          <Col span={8} className="main-page-content-col">
            <DemoBox value={100}>
              {' '}
              <img src={testImage} alt="testimage" />
            </DemoBox>
            <Title level={3}>3 Foods You Should Give Up Forever</Title>
            <Text>
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi
            </Text>
          </Col>
          <Col span={4} className="main-page-content-col">
            <DemoBox value={50}>
              {' '}
              <img src={testImage2} alt="testimage" />
            </DemoBox>
            <Title level={3}>3 Foods You Up Forever</Title>
            <Text>
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis
            </Text>
          </Col>
          <Col span={6} className="main-page-content-col">
            <DemoBox value={140}>
              {' '}
              <img src={testImage} alt="testimage" />
            </DemoBox>
            <Title level={3}>3 Foods You Up Forever</Title>
            <Text>
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis
            </Text>
          </Col>
          <Col span={4} className="main-page-content-col">
            <DemoBox value={80}>
              {' '}
              <img src={testImage2} alt="testimage" />
            </DemoBox>
            <Title level={3}>3 Foods You Up Forever</Title>
            <Text>
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis
            </Text>
          </Col>
        </Row>
        <Divider orientation="left">More About Top Headlines</Divider>
        <div className="news-list">
          <div className="full-news-list">
            <GetNewsList />
          </div>
        </div>
      </div>
      <Layout.Footer
        style={{
          textAlign: 'center',
          color: 'black',
           backgroundColor: '#f6e6a3'
        }}
      >
        MediaCom App ©2019 Created by Kadri Oluwagbemi
      </Layout.Footer>
    </div>
  );
}

export default MainPage;
