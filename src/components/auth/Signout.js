import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Container } from 'react-bootstrap';

import { withFirebase } from '../../firebase';
import * as ROUTES from '../../routes';

class SignOutBase extends Component {
  componentDidMount() {
    this.props.firebase
      .doSignOut()
      .then(() => {
        this.props.history.push(ROUTES.LANDING);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return <Container>Signing out...</Container>;
  }
}

const SignOut = compose(
  withRouter,
  withFirebase,
)(SignOutBase);

export default SignOut;
