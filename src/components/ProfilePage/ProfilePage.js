import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Input,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  CardTitle,
  CardText,
  Label,
  CardHeader,
} from 'reactstrap';
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ProfilePage extends Component {
  state = {
    profile: {
      displayName: 'Alex Calvillo',
      email: 'address@address.com',
      fname: 'alexander',
      lname: 'calvillo',
    },
  };

  handleChange = (key) => (event) => {
    this.setState({
      profile: {
        [key]: event.target.value,
      },
    });
  };

  render() {
    return (
      <Container fluid className="mt-5">
        <Row>
          <Col lg={8}>
            <Card className="bg-secondary">
              <CardHeader className="bg-white">My Profile:</CardHeader>
              <CardBody>
                <Row>
                  <Col lg={6}>
                    <CardTitle className="form-control-label">
                      Display Name:
                    </CardTitle>
                    <Input
                      type="text"
                      onChange={this.handleChange('displayName')}
                      value={this.state.profile.displayName}
                    />
                  </Col>
                  <Col lg={6}>
                    <CardTitle className="form-control-label">Email:</CardTitle>
                    <Input
                      type="text"
                      onChange={this.handleChange('email')}
                      value={this.state.profile.email}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <Label htmlFor="fname" className="form-control-label">
                      First Name:
                    </Label>
                    <Input
                      type="text"
                      id="fname"
                      onChange={this.handleChange('fname')}
                      value={this.state.profile.fname}
                    />
                  </Col>
                  <Col lg={6}>
                    <CardTitle className="form-control-label">
                      Last Name:
                    </CardTitle>
                    <Input
                      type="text"
                      onChange={this.handleChange('lname')}
                      value={this.state.profile.lname}
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <CardBody>
                <h3>
                  {this.state.profile.fname} {this.state.profile.lname}
                </h3>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h2>{this.state.heading}</h2>
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(ProfilePage);
