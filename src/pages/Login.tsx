//Login.tsx
import { Link } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './pageStyles/Login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { loginUser as loginUserAction } from '../store/users';
import { useLoginUserMutation } from '../services/apiCallLogin';

const Login: React.FC = () => {
  const [loginUser, { isLoading, isError }] = useLoginUserMutation();

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
      } else {
        const { data } = result;
        localStorage.setItem('user', JSON.stringify(data));
        dispatch(loginUserAction(data));

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
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
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
            Впервые здесь?
            <Link to="/signup"> Зарегестрироваться</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
