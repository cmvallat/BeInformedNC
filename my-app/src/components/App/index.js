import React from 'react';
import { BrowserRouter as Router, Route,} from "react-router-dom";
import Navigation from "../Navigation";
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import * as ROUTES from '../../constants/routes';

const App = () => (
    <Router>
        <div>
        <Navigation />
        <hr />
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
        <!-- The core Firebase JS SDK is always required and must be listed first -->
        <script src="/__/firebase/7.15.5/firebase-app.js"></script>

        <!-- TODO: Add SDKs for Firebase products that you want to use
             https://firebase.google.com/docs/web/setup#available-libraries -->
        <script src="/__/firebase/7.15.5/firebase-analytics.js"></script>

        <!-- Initialize Firebase -->
        <script src="/__/firebase/init.js"></script>
    </Router>

);

export default App;