import React from 'react';
import { Button, Form, Input, Typography } from 'antd';

function LoginForm(props) {
  console.log('Props', props);
  const { getFieldDecorator } = props.form;
  const { Title } = Typography;
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
      <Button type="primary" className="button">
        Login
      </Button>
      <Form.Item>
      <p>
        Don't have a token? <a  href="https://newsapi.org/register">Get here</a>
      </p>
      </Form.Item>
    </div>
  );
}
const LoginFormComponent = Form.create({ name: 'dynamic_rule' })(LoginForm);

export default LoginFormComponent;
