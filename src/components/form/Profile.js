import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { connect } from 'react-redux';
import { updateUserProfile } from '../../_actions';

function ProfileForm(props) {
  const { getFieldDecorator } = props.form;
  const { Title } = Typography;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      console.log('Update Value');
      if (!err) {
        props.updateUserProfile(values);
      }
    });
  };
  return (
    <div>
      <Title level={4}>Update profile details</Title>
      <Form.Item>
        {getFieldDecorator('name', {
          initialValue: props.user.email ? props.user.email.match(/([^@]+)/i)[0]: '',
          rules: [
            {
              required: true,
              message: 'Your name is required'
            }
          ]
        })(<Input placeholder="Enter your name" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('email', {
          initialValue: props.user.email,
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
          initialValue: props.user.token,
          rules: [
            {
              required: true,
              message: 'Your token is required'
            }
          ]
        })(<Input placeholder="Enter your token" />)}
      </Form.Item>
      <Button type="primary" className="button" onClick={handleSubmit}>
        Update
      </Button>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

const ProfileFormComponent = Form.create({ name: 'dynamic_rule' })(ProfileForm);

export default connect(mapStateToProps, { updateUserProfile })(
  ProfileFormComponent
);
