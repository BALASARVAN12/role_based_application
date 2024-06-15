import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [bgColor, setBgColor] = useState('#fff');
  const navigate = useNavigate();

  // Background color change effect
  useEffect(() => {
    const colors = ['#f8d7da', '#d4edda', '#d1ecf1', '#fff3cd'];
    let colorIndex = 0;

    const interval = setInterval(() => {
      setBgColor(colors[colorIndex]);
      colorIndex = (colorIndex + 1) % colors.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {
    const users = {
      [process.env.REACT_APP_USER_ONE_USERNAME]: process.env.REACT_APP_USER_ONE_PASSWORD,
      [process.env.REACT_APP_USER_TWO_USERNAME]: process.env.REACT_APP_USER_TWO_PASSWORD
    };

    if (users[username] && users[username] === password) {
      setUser(username);
      setError('');
      if (username === process.env.REACT_APP_USER_ONE_USERNAME) {
        navigate('/page1');
      } else if (username === process.env.REACT_APP_USER_TWO_USERNAME) {
        navigate('/page2');
      }
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{ backgroundColor: bgColor, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container className="p-4 shadow-lg rounded" style={{ backgroundColor: '#fff', maxWidth: '400px', width: '100%' }}>
        <h1 className="text-center mb-4">Login Page</h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </Form.Group>
          <Button variant="primary" onClick={handleLogin} className="w-100">Login</Button>
        </Form>
        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      </Container>
    </div>
  );
};

export default LoginPage;
