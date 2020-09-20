import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Skills from './Skills';
//import { useFormik } from 'formik';

import './MainPage.css';

//ReactStrap imports
import { Container, Row, Col, CardBody,} from 'reactstrap';
import {
    Card,
    CardImg,
    CardTitle,
    CardText,
    Badge,
} from "reactstrap";

class MainPage extends Component{

    componentDidMount() {

}

state= {
        first_name: "",
        last_name: "",
        email: "",
        headshot: "",
        organization_name: "",
        skill: ""
};
    render() {
        return(
            <Container>
                  <Row xs={2}>
                      <Col className="spacing">
                          <div className="list-group">
                              <button className="btn btn-secondary btn-lg">
                              <a className="list-group-item" href="#search"><i className="fa fa-users fa-3x" aria-hidden="true"></i>&nbsp;IHKC Community</a>
                              </button>
                          </div>
                      </Col>
                  </Row>
              <Row className="text-center">
                  <Col className="spacing-01">
                      <Card>
                      <button className="btn btn-secondary btn-lg" >
                      <a className="list-group-item" href="#about"><i className="fa fa-microphone" aria-hidden="true"> </i>&nbsp; Find A Speaker</a>
                      </button>
                      </Card>
                  </Col>
                  <Col className="spacing-01">
                      <Card>
                      <button className="btn btn-secondary btn-lg" >
                      <a className="list-group-item" href="#about"><i className="fa fa-briefcase" aria-hidden="true"> </i>&nbsp; Find A Business</a>
                      </button>
                      </Card>
                  </Col>
                  <Col className="spacing-01">
                      <Card>
                      <button class="btn btn-secondary btn-lg">
                      <a className="list-group-item" href="#about"><i className="fa fa-building" aria-hidden="true"></i>&nbsp; Find A Space</a>
                      </button>
                      </Card>
                  </Col>
              </Row>
              <Card className="spacing" border="primary" >
                  <Col sm={4}lg={12}>
                    <CardTitle className= "display-2 text-center">
                            Welcome, {this.props.store.profile.display_name}!
                    </CardTitle>
                      <CardImg style={{ width: "8rem" }}
                          src= {this.props.store.profile.headshot}
                          alt='Profile image'
                  />
                      <CardText className="text-center ">
                        {this.props.store.profile.bio}
                      </CardText>
                      <CardText className="text-center">
                          {this.props.store.profile.organization_name}
                      </CardText>

                      <CardText className="text-center">
                      {this.props.store.profile.job_title}
                      </CardText>
                  </Col>
                      {/* organization name */}

                  <CardText className="text-center">
                  Skills:{' '}
                      {this.props.store &&
                          this.props.store.profile.skills &&
                          this.props.store.profile.skills.map((skill, i) => {
                              let color = 'primary';
                              if (skill.category_id === 1) {
                                color = 'primary';
                              } else if (
                                skill.category === 'Business and Entrepreneurship'
                              ) {
                                color = 'info';
                              }
                              switch (skill.category_id) {
                                case 1:
                                  color = 'primary';
                                  break;
                                case 2:
                                  color = 'info';
                                  break;
                                case 3:
                                  color = 'secondary';
                                  break;
                                case 4:
                                  color = 'success';
                                  break;
                                case 5:
                                  color = 'danger';
                                  break;
                                case 6:
                                  color = 'warning';
                                  break;
                                case 7:
                                  color = 'primary';
                                  break;
                                case 8:
                                  color = 'info';
                                  break;
                                case 9:
                                  color = 'secondary';
                                  break;
                                case 10:
                                  color = 'success';
                                  break;
                                case 11:
                                  color = 'danger';
                                  break;
                                case 12:
                                  color = 'warning';
                                  break;
                              }
                              return (
                                <Badge className="mr-1" key={skill.id} color={color} pill>
                                  {skill.skill}
                                </Badge>
                              );
                            })}
                  </CardText>
                  <Row>
                      <Col className="text-right">
                          <a href="#profile" role="button" aria-disabled="true" className="btn btn-inner--text fa fa-long-arrow-right">view profile</a>
                      </Col>
                  </Row>
                </Card>
          </Container>
        );
    }
}


export default connect(mapStoreToProps)(MainPage);