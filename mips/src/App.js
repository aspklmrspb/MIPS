import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


import PrivateRoute from './PrivateRoute';
import LoginPage from './LoginPage';
import MenuBar from './MenuBar';
import HomePage from './HomePage';
import Page1 from './Page1';
import Page2 from './Page2';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {isAuthenticated && <MenuBar />}
      <Routes>
        <Route
          path="/login"
          element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} element = {<HomePage />}>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
