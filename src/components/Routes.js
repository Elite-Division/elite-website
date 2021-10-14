import React, {Suspense} from 'react';
import { AuthProvider } from '../context/AuthContext';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useLocation
} from 'react-router-dom';

//Protected Route Component
import PrivateRoute from './auth/PrivateRoute';

const HomePage = React.lazy(() => import('./Home/index'));
const AdminPage = React.lazy(() => import('./admin/index'));
const SignupPage = React.lazy(() => import('./auth/Signup'));
const LoginPage = React.lazy(() => import('./auth/Login'));
const ForgotPasswordPage = React.lazy(() => import('./auth/ForgotPassword'));


function NoMatch() {
    const location = useLocation();

    return (
        <div>
            <h3>Error 404</h3>
            <p>
                No match for <code>{location.pathname}</code>
            </p>
        </div>
    );
}

export default function Routes() {
    return (
        <Router>
            <AuthProvider>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <PrivateRoute exact path="/" component={HomePage}/>
                    <PrivateRoute exact path="/admin-console" component={AdminPage}/>
                    <Route exact path="/signup" component={SignupPage}/>
                    <Route exact path="/Login" component={LoginPage}/>
                    <Route exact path="/forgot-password" component={ForgotPasswordPage}/>
                    <Route path="*" component={NoMatch}/>
                </Switch>
              </Suspense>
            </AuthProvider>
        </Router>
    );
}
