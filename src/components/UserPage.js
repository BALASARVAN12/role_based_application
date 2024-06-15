import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserPage = ({ user, handleLogout }) => {
  const { username } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (username === 'bala') {
      navigate('/page1');
    } else if (username === 'san') {
      navigate('/page2');
    }
  }, [username, navigate]);

  return (
    <div>
      <h1>Welcome, {username}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserPage;
