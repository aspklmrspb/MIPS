import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated , element }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};
  

export default PrivateRoute;
