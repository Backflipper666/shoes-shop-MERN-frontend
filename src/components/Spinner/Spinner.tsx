//Spinner.tsx
import React from 'react';
import { Alert, Space, Spin } from 'antd';
import './Spinner.scss';

const Spinner: React.FC = () => (
  <div className="spinner__wrapper">
    {' '}
    <Space direction="vertical" style={{ width: '100%' }}>
      <Spin tip="Loading...">
        <Alert
          message="Getting shoes from the server"
          description="please wait"
          type="info"
        />
      </Spin>
    </Space>
  </div>
);

export default Spinner;
