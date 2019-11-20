import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Layout } from 'antd';
import { Redirect } from 'react-router-dom';


import NavbarComponent from '../../components/Navbar';
import { getTopHeadlines, getEverything } from '../../_actions';
import './Main.scss';
import GetNewsList from '../../components/list/GetNews';
import ContentList from '../../components/list/Content';

class MainPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getTopHeadlines('us', this.props.token);
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
    return this.props.token ? (
      <div className="main-page">
        <NavbarComponent
          defaultSelected="1"
          type="withSearchInput"
          action="Log out"
        />
        <div className="main-page-content">
          <ContentList
            newsList={this.props.headlines? this.handleImageNotDisplayed(this.props.headlines): []}
          />
          <Divider orientation="left">More About Top Headlines</Divider>
          <div className="news-list">
            <div className="full-news-list">
              <GetNewsList
                newsList={this.props.headlines? this.handleImageNotDisplayed(this.props.headlines): []}
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
