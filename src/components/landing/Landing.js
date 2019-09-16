import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

import * as ROUTES from '../../routes';

const Landing = () => (
  <Jumbotron>
    <h1>Welcome to ZenKlub</h1>
    <p>This is an app to see available schedules of a doctor.</p>
    <p>
      Please signin to view schedules! <Link to={ROUTES.SIGN_IN}>Sign in</Link>
    </p>
  </Jumbotron>
);

export default Landing;
