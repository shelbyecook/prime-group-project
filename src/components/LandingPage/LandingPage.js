import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';

// Argon Components
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  CardTitle,
  CardText,
} from 'reactstrap';
import classnames from 'classnames';

// const [activeTab, setActiveTab] = useState('1');

//   const toggle = tab => {
//     if(activeTab !== tab) setActiveTab(tab);
//   }

class LandingPage extends Component {
  state = {
    activeTab: '1',
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    console.log(this.state.activeTab);
    return (
      <Container>
        <Container>
          <Card style={{ backgroundColor: '#BC91D9' }}>
            <CardBody className="text-center">
              <img
                src="https://www.innovateherkc.com/wp-content/uploads/2019/09/InnovateHer_Logo_small.png"
                alt="logo for InnovateHer KC"
              />
            </CardBody>
          </Card>
        </Container>
        <Container>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames(this.state.activeTab === '1')}
                onClick={() => {
                  this.toggle('1');
                }}
              >
                Tab1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames(this.state.activeTab === '2')}
                onClick={() => {
                  this.toggle('2');
                }}
              >
                More Tabs
              </NavLink>
            </NavItem>
          </Nav>
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
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
