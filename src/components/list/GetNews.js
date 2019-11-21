import React from 'react';
import { connect } from 'react-redux';
import { getStory } from '../../_actions';
import { List, Icon } from 'antd';
import { Link } from 'react-router-dom';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

function GetNewsList(props) {
  return props.newsList ? (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3
      }}
      dataSource={props.newsList}
      renderItem={(item, index) => (
        <List.Item
          key={index}
          noborder="true"
          style={{
            borderBottomColor: 'transparent',
            borderBottomWidth: 0
          }}
          /* actions={[
            <IconText type="star-o" text="156" key="list-vertical-star-o" />,
            <IconText type="like-o" text="156" key="list-vertical-like-o" />,
            <IconText type="message" text="2" key="list-vertical-message" />
          ]} */
          extra={<img width={272} alt="news" src={item.urlToImage} />}
        >
          <List.Item.Meta
            title={
              <Link
                to="/story"
                onClick={e => {
                  props.getStory(item);
                }}
              >
                Home{item.title}
              </Link>
            }
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  ) : null;
}

export default connect(null, { getStory })(GetNewsList);
