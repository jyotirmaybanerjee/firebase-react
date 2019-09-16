import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { withFirebase } from '../../firebase';

import Navigation from './components/nav/Navigation';
import LandingPage from './components/landing/Landing';
import SignUpPage from './components/auth/SignUp';
import SignInPage from './components/auth/SignIn';
import SignOutPage from './components/auth/Signout';
import HomePage from './components/home/Home';

import * as ROUTES from './routes';

/*

  var user = firebase.auth().currentUser;

if (user) {
  // User is signed in.
} else {
  // No user is signed in.
}
*/

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route exact path={ROUTES.SIGN_OUT} component={SignOutPage} />
      <Route exact path={ROUTES.HOME} component={HomePage} />
    </div>
  </Router>
);

export default App;
