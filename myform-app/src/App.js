// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import FormComponent from './FormComponent';
import PrivateRoute from './PrivateRoute';
import HomePage from './pages/HomePage';
import ProtectedPage from './pages/ProtectedPage';

const App = () => {
  return (
    <Router>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <RouteTransitionWrapper />
    </Router>
  );
};

// Component to handle route transitions
const RouteTransitionWrapper = () => {
  const location = useLocation();
  
  return (
    <div className="transition-wrapper">
      <Routes location={location} key={location.key}>
        <Route path="/login" element={<FormComponent />} />
        <Route path="/protected" element={<PrivateRoute element={ProtectedPage} />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
