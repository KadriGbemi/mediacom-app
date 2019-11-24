import React from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { connect } from 'react-redux';
import { login, getAlertError, getTopHeadlines } from '../../_actions/index';

function LoginForm(props) {
  const { getFieldDecorator } = props.form;
  const { Title } = Typography;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.login(values, 'us');
        props.getTopHeadlines('us', values.token);
      }
    });
  };
  return (
    <div className="login-form">
      <Title level={4} className="login-form-title">
        Sign in to see top news
      </Title>
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [
            {
              required: true,
              message: 'Your email is required'
            }
          ]
        })(<Input placeholder="Enter your email" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('token', {
          rules: [
            {
              required: true,
              message: 'Your token is required'
            }
          ]
        })(<Input placeholder="Enter your token" />)}
      </Form.Item>
      <Button type="primary" className="button" onClick={handleSubmit}>
        Login
      </Button>
      <Form.Item>
        <p>
          Don't have a token?{' '}
          <a
            href="https://newsapi.org/register"
            rel="noopener noreferrer"
            target="_blank"
          >
            Get here
          </a>
        </p>
      </Form.Item>
    </div>
  );
}
const LoginFormComponent = Form.create({ name: 'dynamic_rule' })(LoginForm);

function mapStateToProps(state) {
  return {
    token: state.token,
    headlines: state.headlines
  };
}

export default connect(mapStateToProps, {
  login,
  getAlertError,
  getTopHeadlines
})(LoginFormComponent);
