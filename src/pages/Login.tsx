import { Link } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Alert, Space } from 'antd';
import './pageStyles/Login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { loginUser as loginUserAction } from '../store/users';
import { useLoginUserMutation } from '../services/apiCallLogin';
import { useState } from 'react';

const Login: React.FC = () => {
  const [loginUser, { isLoading, isError }] = useLoginUserMutation();
  const [localError, setLocalError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const user = useSelector((state: RootState) => state.users.user);
  const dispatch = useDispatch();
  const onFinish = async (values: any) => {
    console.log('Received values of form: ', values);

    try {
      console.log('well, email is: ', values.email);
      console.log('well, password is: ', values.password);

      const result = await loginUser({
        email: values.email,
        password: values.password,
      });

      if ('error' in result) {
        // Handle the error
        console.error('How unfortunate', result.error);

        if ('data' in result.error) {
          const data = result.error.data as { error: string }; // Type assertion

          console.log('data inside result.error:', data);
          const { error } = data;
          console.log('listen up, the error in data is: ', error);
          setLocalError(error);
          setSuccess(false);
        }
      } else {
        const { data } = result;
        localStorage.setItem('user', JSON.stringify(data));
        dispatch(loginUserAction(data));
        setSuccess(true);

        // Handle the success response
        console.log('result is yeheeey!: ', data); // You can access the response data here
      }
    } catch (error) {
      // Handle other errors
      console.error(error);
    }
  };

  return (
    <div className="form">
      <div className="form__wrapper" id="components-form-demo-normal-login">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email address!' },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please input your Password!' },
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
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
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
                  message="Вы успешно вошли"
                  type="success"
                  closable
                  onClose={() => setSuccess(false)}
                />
              </Space>
            )}
            Впервые здесь?
            <Link to="/signup"> Зарегистрироваться</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
