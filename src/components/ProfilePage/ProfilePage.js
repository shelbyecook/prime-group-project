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
    profile: {},
  };
  componentDidMount() {
    this.setState({
      profile: this.props.store.profile,
    });
  }

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
                <Card className="bg-secondary shadow">
                  <CardHeader className="bg-white">My Profile:</CardHeader>
                  <CardBody>
                    <CardText className="text-uppercase text-muted">
                      User Information
                    </CardText>
                    <Row>
                      <Col lg={6}>
                        <CardTitle className="form-control-label">
                          Display Name:
                        </CardTitle>
                        <Input
                          type="text"
                          placeholder={this.props.store.profile.display_name}
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
                          placeholder={this.props.store.profile.email}
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
                          placeholder={this.props.store.profile.first_name}
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
                          placeholder={this.props.store.profile.last_name}
                          onChange={this.handleChange('last_name')}
                          value={this.state.profile.last_name}
                        />
                      </Col>
                    </Row>
                    <hr />
                    <CardText className="text-uppercase text-muted">
                      Professional Information
                    </CardText>
                    <Row>
                      <Col lg={6}>
                        <Label htmlFor="bio" className="form-control-label">
                          Bio:
                        </Label>
                        <Input
                          id="bio"
                          type="text"
                          placeholder={this.props.store.profile.bio}
                          onChange={this.handleChange('bio')}
                          value={this.state.profile.bio}
                        />
                      </Col>
                      <Col lg={6}>
                        <Label
                          htmlFor="community_role"
                          className="form-control-label"
                        >
                          Community Role:
                        </Label>
                        <Input
                          id="community_role"
                          type="text"
                          placeholder={this.props.store.profile.community_role}
                          onChange={this.handleChange('community_role')}
                          value={this.state.profile.community_role}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Label
                          htmlFor="organization_name"
                          className="form-control-label"
                        >
                          Organization:
                        </Label>
                        <Input
                          id="organization_name"
                          type="text"
                          placeholder={
                            this.props.store.profile.organization_name
                          }
                          onChange={this.handleChange('organization_name')}
                          value={this.state.profile.organization_name}
                        />
                      </Col>
                      <Col lg={6}>
                        <Label
                          htmlFor="job_title"
                          className="form-control-label"
                        >
                          Job Title:
                        </Label>
                        <Input
                          type="text"
                          id="job_title"
                          placeholder={this.props.store.profile.job_title}
                          onChange={this.handleChange('job_title')}
                          value={this.state.profile.job_title}
                        />
                      </Col>
                    </Row>
                    <hr />
                    <CardText className="text-uppercase text-muted">
                      Social Media
                    </CardText>
                    <Row>
                      <Col lg={6}>
                        <Label
                          htmlFor="linkedin"
                          className="form-control-label"
                        >
                          LinkedIn:
                        </Label>
                        <Input
                          id="linkedin"
                          type="text"
                          placeholder={this.props.store.profile.linkedin}
                          onChange={this.handleChange('linkedin')}
                          value={this.state.profile.linkedin}
                        />
                      </Col>
                      <Col lg={6}>
                        <Label
                          htmlFor="facebook"
                          className="form-control-label"
                        >
                          Facebook:
                        </Label>
                        <Input
                          id="facebook"
                          type="text"
                          placeholder={this.props.store.profile.facebook}
                          onChange={this.handleChange('facebook')}
                          value={this.state.profile.facebook}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Label htmlFor="twitter" className="form-control-label">
                          Twitter:
                        </Label>
                        <Input
                          type="text"
                          id="twitter"
                          placeholder={this.props.store.profile.twitter}
                          onChange={this.handleChange('twitter')}
                          value={this.state.profile.twitter}
                        />
                      </Col>
                      <Col lg={6}>
                        <Label
                          htmlFor="instagram"
                          className="form-control-label"
                        >
                          Instagram:
                        </Label>
                        <Input
                          id="instagram"
                          type="text"
                          placeholder={this.props.store.profile.instagram}
                          onChange={this.handleChange('instagram')}
                          value={this.state.profile.instagram}
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
                <Card className="shadow">
                  <CardBody className="text-center">
                    <img
                      style={{
                        width: '50%',
                        borderRadius: '50%',
                      }}
                      className="card-profile-image"
                      src={this.props.store.profile.headshot}
                      alt="profile headshot"
                    />
                    <h3>
                      {this.props.store.profile.display_name},{' '}
                      <span className="font-weight-light">
                        {this.props.store.profile.community_role}
                      </span>
                    </h3>
                    <p className="lead">
                      {this.props.store.profile.organization_name},{' '}
                      {this.props.store.profile.job_title}
                    </p>
                    <hr />
                    <a href={this.props.store.profile.instagram}>
                      <i
                        className="fa fa-instagram"
                        style={{
                          fontSize: '30px',
                          background:
                            'linear-gradient(220deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
                          WebkitTextFillColor: 'transparent',
                          WebkitBackgroundClip: 'text',
                        }}
                      />
                    </a>{' '}
                    |{' '}
                    <a href={this.props.store.profile.facebook}>
                      <i
                        className="fa fa-facebook-official"
                        style={{ fontSize: '30px', color: '#4267B2' }}
                      />
                    </a>{' '}
                    |{' '}
                    <a href={this.props.store.profile.linkedin}>
                      <i
                        className="fa fa-linkedin-square"
                        style={{ fontSize: '30px', color: '#2867B2' }}
                      />
                    </a>{' '}
                    |{' '}
                    <a href={this.props.store.profile.twitter}>
                      <i
                        className="fa fa-twitter-square"
                        style={{ fontSize: '30px', color: '#1DA1F2' }}
                      />
                    </a>
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
