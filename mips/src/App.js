import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import LoginPage from './Account/LoginPage';
import MenuBar from './Routes/MenuBar';
import HomePage from './Home/HomePage';
import More from './More/More';
import HiTrustMails from './More/HiTrustMails';
import Logs from './More/Logs';
import MailTemplates from './More/MailTemplates';
import RecordsEntered from './Measure/RecordsEntered';
import TinAggregationIndex from './TinAggregation/TinAggregationIndex';
import TinAggregation from './TinAggregation/TinAggregation';
import { useSelector } from 'react-redux';
import { TextField } from '@mui/material';

const TestComponent = () =>{
  return (
    <React.Fragment>
    <h1>Test Component</h1>
    <h1>Test Component 2</h1>
    </React.Fragment>
  )
}

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  return (
    <Router>
      {isAuthenticated && <MenuBar />}
      <Routes>
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/records-entered" element={<RecordsEntered userName="administrator_100210" />} />
        <Route
          path="/tinaggregation"
          element={<TinAggregation />}
        >
          <Route index element={<Navigate to="index" replace  />} />
          <Route path="index" element={<TinAggregationIndex  userRole="FacilityUser" userName="administrator_100210" npi="1962690453" />} />
        </Route>
        <Route
          path="/more"
          element={<More />}
        >
          <Route index element={<Navigate to="mail-templates" replace  />} />
          <Route path="mail-templates" element={<MailTemplates   />} />
          <Route path="hitrust-emails" element={<HiTrustMails   />} />
          <Route path="logs" element={<Logs   />} />
        </Route>
        <Route
          path="*"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              element={<HomePage userRole="FacilityUser" userName="administrator_100210" />}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
