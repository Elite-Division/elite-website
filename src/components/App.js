import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Protected Route Component
import PrivateRoute from './auth/PrivateRoute';

//Imports of Authentication components
import Signup from './auth/Signup';
import Login from './auth/Login';
import ForgotPassword from './auth/ForgotPassword';

//Imports of Web pages
import Home from './Home/index';

//Imports of Admin Page
import Admin from './admin/index';

function App(){

  return (
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Home}/>
                <PrivateRoute exact path="/admin-console" component={Admin}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/Login" component={Login}/>
                <Route exact path="/forgot-password" component={ForgotPassword}/>
              </Switch>
            </AuthProvider>
          </Router>
  )
}

export default App;

