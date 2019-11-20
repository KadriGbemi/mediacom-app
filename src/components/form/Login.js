import React from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { connect } from 'react-redux';
import { login } from '../../_actions/index';

function LoginForm(props) {
  const { getFieldDecorator } = props.form;
  const { Title } = Typography;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        props.login(values, 'us');
        if (props.token) {
          props.history.push(`/main`);
        }
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
    user: state.user
  };
}

export default connect(mapStateToProps, { login })(LoginFormComponent);
