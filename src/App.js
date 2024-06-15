import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DynamicPages from './pages/DynamicPages';
import HomePage from './components/HomePage';

const App = () => {
  const [user, setUser] = React.useState('');

  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/login"
          element={<LoginPage setUser={setUser} />}
        />
        <Route
          path="/page1"
          element={<DynamicPages pageName="Page1" />}
        />
        <Route
          path="/page2"
          element={<DynamicPages pageName="Page2" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
