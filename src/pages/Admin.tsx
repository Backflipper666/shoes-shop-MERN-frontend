import { useNavigate } from 'react-router-dom';
import React from 'react';

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button>users</button>
      <button onClick={() => navigate('/admin/shoes')}>Shoes</button>
    </div>
  );
};

export default Admin;
