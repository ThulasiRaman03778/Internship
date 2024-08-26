import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './useAuth'; // Custom hook or function to check authentication status

const PrivateRoute = ({ element: Element }) => {
  const { isAuthenticated } = useAuth(); // Your authentication logic

  return isAuthenticated ? <Element /> : <Navigate to="/login" />;
};

export default PrivateRoute;