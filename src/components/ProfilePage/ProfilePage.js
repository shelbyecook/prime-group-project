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
    profile: this.props.store.profile,
  };
  // componentDidMount() {
  //   this.props.dispatch({
  //     type: 'GET_PROFILE',
  //     payload: this.props.store.user.id,
  //   });
  // }

  handleChange = (key) => (event) => {
    this.setState({
      profile: {
        [key]: event.target.value,
      },
    });
  };

  render() {
    console.log(this.state.profile);
    return (
      <>
        {this.props && this.props.store && this.props.store.profile && (
          <Container fluid className="mt-5">
            <Row>
              <Col
                lg={{ size: 8, order: '1' }}
                sm={{ size: 12, order: '2' }}
                xs={{ size: 12, order: '2' }}
              >
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
                          onChange={this.handleChange('display_name')}
                          value={this.state.profile.display_name}
                        />
                      </Col>
                      <Col lg={6}>
                        <CardTitle className="form-control-label">
                          Email:
                        </CardTitle>
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
                          onChange={this.handleChange('first_name')}
                          value={this.state.profile.first_name}
                        />
                      </Col>
                      <Col lg={6}>
                        <CardTitle className="form-control-label">
                          Last Name:
                        </CardTitle>
                        <Input
                          type="text"
                          onChange={this.handleChange('last_name')}
                          value={this.state.profile.last_name}
                        />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col
                lg={{ size: 4, order: '2' }}
                sm={{ size: 12, order: '1' }}
                xs={{ size: 12, order: '1' }}
              >
                <Card>
                  <CardBody className="text-center">
                    <img
                      style={{
                        width: '75%',
                        borderRadius: '50%',
                      }}
                      src={this.state.profile.headshot}
                      alt="profile headshot"
                    />
                    <h3>
                      {this.state.profile.first_name}{' '}
                      {this.state.profile.last_name},{' '}
                      <span className="font-weight-light">
                        {this.state.profile.community_role}
                      </span>
                    </h3>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <h2>{this.state.heading}</h2>
          </Container>
        )}
      </>
    );
  }
}

export default connect(mapStoreToProps)(ProfilePage);
