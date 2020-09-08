import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Importing Reactstrap
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/font-awesome/css/font-awesome.min.css';
import '../../assets/scss/argon-design-system-react.scss';

class RegisterForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      },
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    console.log(this.state);
    console.log(this.props.store);
    return (
      <Form onSubmit={this.registerUser}>
        <h2>Register User</h2>
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}
        <FormGroup>
          <Label htmlFor="firstName">
            First Name:
            <Input
              type="text"
              name="firstName"
              value={this.state.firstName}
              required
              onChange={this.handleInputChangeFor('firstName')}
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastName">
            Last Name:
            <Input
              type="text"
              name="lastName"
              value={this.state.lastName}
              required
              onChange={this.handleInputChangeFor('lastName')}
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">
            Email:
            <Input
              placeholder="name@example.com"
              type="email"
              name="email"
              value={this.state.email}
              required
              onChange={this.handleInputChangeFor('email')}
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">
            Password:
            <Input
              type="password"
              name="password"
              value={this.state.password}
              required
              onChange={this.handleInputChangeFor('password')}
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Input className="btn" type="submit" name="submit" value="Register" />
        </FormGroup>
      </Form>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
