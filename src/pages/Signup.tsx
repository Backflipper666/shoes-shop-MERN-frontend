//Signup.tsx
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSignupUserMutation } from '../services/apiCallSignup';

import { Button, Form, Input, Alert, Space } from 'antd';
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

    try {
      const result = await signupUser({
        email: values.email,
        password: values.password,
      });

      if ('data' in result) {
        const { data } = result;
        localStorage.setItem('user', JSON.stringify(data));
        dispatch(loginUser(data));
        setLocalError(null);
        setSuccess(true);

        console.log('result is: ', data); // You can access the response data here
      } else if ('error' in result) {
        const { error: mistake } = result as { error: any };
        console.log('Here is the errorrr: ', mistake);
        if ('data' in mistake && mistake.data) {
          console.log('furthermore, error.data is: ', mistake.data);
          const { error: theError } = mistake.data;
          console.log('theError is:::::', theError);
          console.log('local error', localError);
          setLocalError(theError);
          setSuccess(false);
        }
      } else {
        console.error('Error occurred:', result);
      }
    } catch (error: any) {
      console.error(error);
      setLocalError(error);
      setSuccess(false);
    }
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState(null);
  const [success, setSuccess] = useState(false);

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
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || value.length >= 6) {
                    // The password is at least 6 characters long or empty
                    return Promise.resolve();
                  }

                  if (!/^\w*$/.test(value)) {
                    // The password contains at least one non-alphanumeric character
                    return Promise.reject(
                      new Error('Password must contain at least one symbol!')
                    );
                  }

                  // The password does not meet the minimum length requirement
                  return Promise.reject(
                    new Error('Password must be at least 6 characters long!')
                  );
                },
              }),
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
            {localError && (
              <Space
                direction="vertical"
                style={{ width: '100%' }}
                className="form__error-text"
              >
                <Alert
                  message={localError}
                  type="error"
                  closable
                  onClose={() => setLocalError(null)}
                />
              </Space>
            )}
            {success && (
              <Space
                direction="vertical"
                style={{ width: '100%' }}
                className="form__error-text"
              >
                <Alert
                  message="Вы успешно зарегистрировались"
                  type="success"
                  closable
                  onClose={() => setSuccess(false)}
                />
              </Space>
            )}
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
