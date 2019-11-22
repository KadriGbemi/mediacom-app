import React from 'react';
import { connect } from 'react-redux';
import { getStory } from '../../_actions';
import { List} from 'antd';
import { Link } from 'react-router-dom';

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
