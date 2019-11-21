import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {Layout } from 'antd';
import NavbarComponent from '../../components/Navbar';
import './styles/story.scss';

function StoryPage(props) {
  return props.token && props.story ? (
    <div>
      <NavbarComponent action="Log out" />
      <div className="story-page">
        <h1> {props.story.title}</h1>
        <p>{props.story.description}</p>
        <div><img src={props.story.urlToImage} alt="news list" /></div>
        <p>{props.story.content}</p>
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

function mapStateToProps(state) {
  return {
    token: state.token,
    story: state.story
  };
}

export default connect(mapStateToProps, null)(StoryPage);
