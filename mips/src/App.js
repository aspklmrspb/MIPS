import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


import PrivateRoute from './PrivateRoute';
import LoginPage from './Account/LoginPage';
import MenuBar from './Routes/MenuBar';
import HomePage from './Home/HomePage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Router>
      {isAuthenticated && <MenuBar />}
      <Routes>
        <Route
          path="/login"
          element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="*"
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
