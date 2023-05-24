import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform authentication logic here
    // For simplicity, let's assume authentication is successful
    navigate('/',{replace : true});

    setIsAuthenticated(true);
  };

  return (
    
    <div>
      <form onSubmit={handleLogin}>
        <div className="ribbon"></div>
        <div className="form-horizontal login">
          <h1 className="text-center">Login Details</h1>
    
          <div className="form-group mb-10">
              <label className="control-label col-md-2" for="UserName">User Name</label>
              <div className="col-md-10">
                <input 
                  className="form-control logininput text-box single-line" 
                  data-val="true" 
                  data-val-required="Please enter UserName" 
                  id="UserName" 
                  name="UserName" 
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span className="field-validation-valid text-danger" data-valmsg-for="UserName" data-valmsg-replace="true"></span>
              </div>
          </div>

          <div className="form-group mt-10">
              <label className="control-label col-md-2" for="Password">Password</label>
              <div className="col-md-10">
                  <input 
                    className="form-control logininput" 
                    data-val="true" 
                    data-val-required="Please enter Password" 
                    id="Password" 
                    name="Password" 
                    type="password"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                  <span className="field-validation-valid text-danger" data-valmsg-for="Password" data-valmsg-replace="true"></span>
              </div>
          </div>

          <div className="form-group">
              <div className="col-md-offset-2 col-md-10">
                  <input 
                  type="submit" 
                  value="Login" 
                  className="btn btn-default submit-btn" 
                  />
              </div>
          </div>
          <div className="form-group text-center mt-10">
                  <span style={{color:"red"}}></span>        
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
