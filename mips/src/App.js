import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import LoginPage from './Account/LoginPage';
import MenuBar from './Routes/MenuBar';
import HomePage from './Home/HomePage';
import RecordsEntered from './Measure/RecordsEntered';
import TinAggregationIndex from './TinAggregation/TinAggregationIndex';
import TinAggregation from './TinAggregation/TinAggregation';
import { useSelector } from 'react-redux';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  return (
    <Router>
      {isAuthenticated && <MenuBar />}
      <Routes>
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/records-entered" element={<RecordsEntered />} />
        <Route
          path="/tinaggregation"
          element={<TinAggregation />}
        >
          <Route index element={<Navigate to="index" replace />} />
          <Route path="index" element={<TinAggregationIndex />} />
        </Route>

        <Route
          path="*"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              element={<HomePage userRole="AcrinAdmin" userName="administrator_100210" />}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
