import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Row, Typography, Col } from 'antd';
import { getStory } from '../../_actions';
const { Title, Text } = Typography;

const DemoBox = props => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

const colSpanValues = [4, 12, 6];
function Content(props) {
  const getNewsList = props.newsList
    ? props.newsList
        .flat()
        .splice(1, 3)
        .map((eachNewsListItem, index) => (
          <Col
            span={index < 3 ? colSpanValues[index] : 2 + index}
            className="main-page-content-col"
            key={index}
          >
            <DemoBox>
              <img src={eachNewsListItem.urlToImage} alt="news list" />
            </DemoBox>
            <Title level={3} className="title" onClick={e => {props.getStory(eachNewsListItem)}}>
              {eachNewsListItem.title}
            </Title>
            <Text>{eachNewsListItem.description}</Text>
          </Col>
        ))
    : null;

  return props.newsList ? (
    <div>
      <Row type="flex" justify="space-between" align="top">
        {getNewsList}
      </Row>
    </div>
  ) : (
    <Redirect to="/" />
  );
}

export default connect(null, { getStory })(Content);
