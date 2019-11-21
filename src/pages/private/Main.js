import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Layout } from 'antd';
import { Redirect } from 'react-router-dom';

import NavbarComponent from '../../components/Navbar';
import { getTopHeadlines, getEverything } from '../../_actions';
import './styles/main.scss';
import GetNewsList from '../../components/list/GetNews';
import ContentList from '../../components/list/Content';

class MainPage extends Component {
  constructor(props) {
    super(props);
  }
  handleImageNotDisplayed = headlines => {
    if (headlines) {
      let filter = headlines.articles.filter(item => {
        if (item.urlToImage !== null) {
          return item;
        }
      });
      return filter;
    }
  };
  render() {
    return (this.props.token && this.props.headlines)? (
      <div className="main-page">
         <NavbarComponent
          defaultSelected="1"
          type="withSearchInput"
          action="Log out"
        />
       <div className="main-page-content">
          <ContentList
            newsList={this.handleImageNotDisplayed(this.props.headlines)
            }
          />
          {this.props.headlines ? (
            <Divider orientation="right">More Headlines</Divider>
          ) : null}
          <div className="news-list">
            <div className="full-news-list">
              <GetNewsList
                newsList={this.handleImageNotDisplayed(this.props.headlines)
                }
              />
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
    ) : (
      <Redirect to="/" />
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.token,
    headlines: state.headlines
  };
}

export default connect(mapStateToProps, { getTopHeadlines, getEverything })(
  MainPage
);
