import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Importing Reactstrap
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.email && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          email: this.state.email,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <Form onSubmit={this.login}>
        <h2>Login</h2>
        {this.props.store.errors.loginMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.loginMessage}
          </h3>
        )}
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            className="form-control-alternative"
            type="text"
            name="email"
            required
            value={this.state.email}
            onChange={this.handleInputChangeFor('email')}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password:</Label>
          <Input
            className="form-control-alternative"
            type="password"
            name="password"
            required
            value={this.state.password}
            onChange={this.handleInputChangeFor('password')}
          />
        </FormGroup>
        <FormGroup>
          <Input className="btn" type="submit" name="submit" value="Log In" />
        </FormGroup>
      </Form>
    );
  }
}

export default connect(mapStoreToProps)(LoginForm);
