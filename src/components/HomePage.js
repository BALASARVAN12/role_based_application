import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'; // Custom CSS for HomePage styling

const HomePage = () => {
  return (
    <div>
        <div className="home-page">
      <Container className="content-container">
        <h1 className="display-4">Welcome to My App</h1>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Link to="/login">
        <Button variant="primary">Get Started</Button>
        </Link>
      </Container>
    </div>
    </div>
  );
};

export default HomePage;
