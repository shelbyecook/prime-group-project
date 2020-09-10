import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import RegisterPage from '../RegisterPage/RegisterPage';

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import classnames from 'classnames';

class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
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
  render() {
    return (
      <>
        <Row>
          <Col lg={10} style={{ margin: 'auto' }}>
            <Card style={{ backgroundColor: '#1BBFBF' }}>
              <CardBody>
                <h1 className="display-1">
                  Welcome to the InnovateHer KC Community!
                </h1>
                <p className="lead">
                  We'll start with gathering some information about{' '}
                  <span style={{ color: '#F59032' }}>you</span>, and help you
                  make your place in the community of strong womxn. Through this
                  we can solidfy the foundation for the six pillars of
                  InnovateHer KC: Social Connection, Professional Development,
                  Championship, Amplification, Resource Sharing, and Mentorship.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Container>
          <Nav tabs className="nav-fill flex-column flex-sm-row">
            <NavItem>
              <NavLink
                className={classnames('mb-sm-3 mb-md-0', {
                  active: this.state.activeTab === '1',
                })}
                onClick={() => {
                  this.toggle('1');
                }}
              >
                Step 1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames('mb-sm-3 mb-md-0', {
                  active: this.state.activeTab === '2',
                })}
                onClick={() => {
                  this.toggle('2');
                }}
              >
                Step 2
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col>
                  <Card>
                    <CardBody>
                      <Container>
                        <RegisterPage />
                      </Container>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col>
                  <Card>
                    <CardBody></CardBody>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
      </>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
