import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DynamicPages from './pages/DynamicPages';
import HomePage from './components/HomePage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const App = () => {
  const [user, setUser] = React.useState('');

  return (
    <Router>
      <div>
      <ToastContainer />
   
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
          element={<DynamicPages pageName="DivisonA" />}
        />
        <Route
          path="/page2"
          element={<DynamicPages pageName="DivisonB" />}
        />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
