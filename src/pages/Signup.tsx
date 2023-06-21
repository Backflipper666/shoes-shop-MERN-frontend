//Signup.tsx
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSignupUserMutation } from '../services/apiCallSignup';

import { Button, Form, Input } from 'antd';
import { loginUser } from '../store/users';
import React from 'react';
import './pageStyles/Signup.scss';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Signup: React.FC = () => {
  const [signupUser, { isLoading, isError }] = useSignupUserMutation();

  const user = useSelector((state: RootState) => state.users.user);
  const dispatch = useDispatch();

  const onFinish = async (values: any) => {
    console.log('Received values of form: ', values);
    setEmail(values.email);
    setPassword(values.password);

    // Call the signupUserQuery function with the email and password
    try {
      console.log('well, email is: ', values.email);
      console.log('well, password is: ', values.password);

      const result = await signupUser({
        email: values.email,
        password: values.password,
      });
      localStorage.setItem('user', JSON.stringify(result));
      dispatch(loginUser(result));

      // Handle the success response
      console.log('result is: ', result); // You can access the response data here
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [form] = Form.useForm();
  return (
    <div className="form">
      {' '}
      <div className="signup__wrapper">
        {' '}
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not a valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('The passwords do not match!')
                  );
                },
              }),
            ]}
          >
            <Input.Password className="form__confirm" />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
            <div className="form__button-link">
              Уже есть аккаунт?{' '}
              <Link to="/login" className="custom-link">
                Войти
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
