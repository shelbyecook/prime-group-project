import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './MemberItem.css';
import {
  Container,
  Badge,
  Button,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardSubtitle,
  Modal,
} from 'reactstrap';
import NodeMailer from '../NodeMailer/NodeMailer';

class MemberItem extends Component {
  state = { defaultModal: false, isOpen: false };

  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  handleListingClick = () => {
    console.log(this.props.id);
    this.props.dispatch({
      type: 'SET_LISTING_CLICKED',
      payload: this.props.member,
    });
    this.toggleModal('defaultModal');
  };

  openMember = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { member } = this.props;

    const closedFade = {
      top: '0',
      left: '0',
      backgroundImage: 'linear-gradient(to bottom, transparent, #f2f2f2)',
      transition: 'all 0.3s 0.08s ease-in-out',
    };

    const openFade = {
      top: '0',
      left: '0',
      backgroundImage: 'none',
      transition: 'all 0.3s 0.08s ease-in-out',
    };

    const closedHeight = {
      maxHeight: '180px',
      position: 'relative',
      top: '0',
      bottom: '0',
      overflow: 'hidden',
      zIndex: '0',
      transition: 'all 0.3s 0.08s cubic-bezier(.17,.67,.83,.67)',
    };

    const openHeight = {
      maxHeight: '100%',
      position: 'relative',
      top: '0',
      // bottom: '0',
      overflow: 'hidden',
      zIndex: '999',
      // transform: 'translate(0, 50px)',
      transition: 'all 0.3s 0.08s cubic-bezier(.17,.67,.83,.67)',
    };
    return (
      <>
        <Card
          className="shadow"
          style={this.state.isOpen ? openHeight : closedHeight}
          onClick={this.openMember}
        >
          <CardBody
            className="m-0"
            style={this.state.isOpen ? openFade : closedFade}
          >
            <Row>
              <Col lg={2} xs={6} className="mr-0">
                <img
                  style={{
                    minWidth: '150px',
                    minHeight: '150px',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    borderRadius: '50%',
                  }}
                  src={member.headshot}
                  alt="Profile image"
                />
                <Button
                  className="mt-5"
                  outline
                  size="sm"
                  color="primary"
                  onClick={this.handleListingClick}
                >
                  Contact Now
                </Button>
              </Col>
              <Col lg={10} xs={6}>
                <Row>
                  <Col lg={3}>
                    <p className="lead mb-0">
                      {member.first_name} {member.last_name}
                    </p>
                    <p className="h5">
                      {member.job_title} at {member.organization_name}
                    </p>
                  </Col>
                  <Col lg={4}>
                    <p>Bio: {member.bio}</p>
                  </Col>
                  <Col lg={5}>
                    <h3 className="lead">Skills:</h3>
                    {member.skills.map((skill, i) => {
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
                        <Badge key={skill.id} color={color} pill>
                          {skill.skill}
                        </Badge>
                      );
                    })}
                  </Col>
                </Row>
                <hr />
                <Row className="mt-3">
                  <Col>
                    <h2>Social Media</h2>
                    <a href={member.instagram} target="_blank">
                      <i
                        className="fa fa-instagram"
                        style={{
                          fontSize: '30px',
                          background:
                            'linear-gradient(220deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
                          WebkitTextFillColor: 'transparent',
                          WebkitBackgroundClip: 'text',
                          verticalAlign: 'middle',
                        }}
                      />
                    </a>{' '}
                    |{' '}
                    <a href={member.facebook}>
                      <i
                        className="fa fa-facebook-official"
                        style={{
                          fontSize: '30px',
                          color: '#4267B2',
                          verticalAlign: 'middle',
                        }}
                      />
                    </a>{' '}
                    |{' '}
                    <a href={member.linkedin}>
                      <i
                        className="fa fa-linkedin-square"
                        style={{
                          fontSize: '30px',
                          color: '#2867B2',
                          verticalAlign: 'middle',
                        }}
                      />
                    </a>{' '}
                    |{' '}
                    <a href={member.twitter}>
                      <i
                        className="fa fa-twitter-square"
                        style={{
                          fontSize: '30px',
                          color: '#1DA1F2',
                          verticalAlign: 'middle',
                        }}
                      />
                    </a>
                  </Col>
                  {/* <Col>
                    <Button
                      outline
                      size="sm"
                      color="primary"
                      onClick={this.handleListingClick}
                    >
                      Contact Now
                    </Button>
                  </Col> */}
                </Row>
              </Col>
            </Row>
          </CardBody>
        </Card>

        <Modal
          className="modal-dialog-centered modal-primary"
          contentClassName="bg-gradient-primary"
          isOpen={this.state.defaultModal}
          toggle={() => this.toggleModal('defaultModal')}
        >
          <div className="m-5">
            <NodeMailer />
          </div>
          {/* <div className="modal-header">
            <p className="lead" id="modal-title-default">
              {this.props.store.listingClickedReducer.first_name}{' '}
              {this.props.store.listingClickedReducer.last_name}
            </p>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal('defaultModal')}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <h4>{this.props.store.listingClickedReducer.organization_name}</h4>
            <p>Bio: {this.props.store.listingClickedReducer.bio}</p>
          </div>
          <div className="modal-footer">
            <Button outline color="primary" type="button">
              Contact Now
            </Button>
            <Button
              className="ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal('defaultModal')}
            >
              Close
            </Button>

          </div> */}
        </Modal>
      </>
    );
  }
}

export default connect(mapStoreToProps)(MemberItem);
