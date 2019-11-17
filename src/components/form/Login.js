import React from 'react';
import { Button, Form, Input, Typography } from 'antd';

function LoginForm(props) {
  console.log('Props', props);
  const { getFieldDecorator } = props.form;
  const { Title, Text  } = Typography;
  return (
    <div className="login-form">
      <Title level={4} className="left-grid-text">
        Sign in
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
      <Form.Item extra="Don't have a token? Get here">
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
    </div>
  );
}
const LoginFormComponent = Form.create({ name: 'dynamic_rule' })(LoginForm);

export default LoginFormComponent;
