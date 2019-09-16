import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Container, Button, Form } from 'react-bootstrap';

import { SignUpLink } from './SignUp';
import { withFirebase } from '../../firebase';
import * as ROUTES from '../../routes';

const SignInPage = () => (
  <div>
    <Container>SignIn</Container>
    <SignInForm />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <Form.Control
            size="lg"
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <br />
          <Form.Control
            size="lg"
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <br />
          <Button
            bsStyle="primary"
            className="pull-right"
            disabled={isInvalid}
            type="submit"
          >
            Sign In
          </Button>
          <br />
          {error && <p>{error.message}</p>}
        </Form>
      </Container>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
