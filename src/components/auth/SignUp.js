import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';

import { withFirebase } from '../../firebase';
import * as ROUTES from '../../routes';

const SignUpPage = () => (
  <div>
    <Container>SignUp</Container>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = event => {
    const { email, passwordOne } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
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
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <Form.Control
            size="lg"
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name"
          />
          <br />
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
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <br />
          <Form.Control
            size="lg"
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />
          <br />
          <Button
            bsStyle="primary"
            className="pull-right"
            disabled={isInvalid}
            type="submit"
          >
            Sign Up
          </Button>
          <br />
          {error && <p>{error.message}</p>}
        </Form>
      </Container>
    );
  }
}

const SignUpLink = () => (
  <Container>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </Container>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };
