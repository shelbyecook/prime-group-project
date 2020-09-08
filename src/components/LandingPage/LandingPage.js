import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';

// Argon Components
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

class LandingPage extends Component {
  state = {
    heading: 'This is the state',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <Container>
        <Container>
          <Card className="bg-info">Text here.</Card>
        </Container>

        <Row>
          <Col>
            <Card>
              <CardBody>
                <LoginForm />
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody>
                <RegisterForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
