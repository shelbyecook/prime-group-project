import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// import './MemberItem.css';
import {
  Container,
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

class MemberItem extends Component {
  state = { defaultModal: false };

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

  render() {
    const { member } = this.props;

    return (
      <>
        <Card className="shadow">
          <CardBody className="m-0">
            <Row>
              <Col lg={2} xs={4} className="mr-0">
                <img
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    borderRadius: '50%',
                  }}
                  src={member.headshot}
                  alt="Profile image"
                />
              </Col>
              <Col lg={2} xs={5}>
                <CardTitle className="text-left">
                  {member.first_name} {member.last_name}
                </CardTitle>
              </Col>
              <Col lg={4} xs={7}>
                <p>
                  {member.community_role} at {member.organization_name}
                </p>
              </Col>
              <Col lg={4} xs={5}>
                <Button
                  outline
                  size="sm"
                  color="primary"
                  onClick={this.handleListingClick}
                >
                  More Info
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>

        <Modal
          className="modal-dialog-centered"
          isOpen={this.state.defaultModal}
          toggle={() => this.toggleModal('defaultModal')}
        >
          <div className="modal-header">
            <h4 className="modal-title" id="modal-title-default">
              {this.props.store.listingClickedReducer.first_name}{' '}
              {this.props.store.listingClickedReducer.last_name}
            </h4>
            <h4>{this.props.store.listingClickedReducer.organization_name}</h4>
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
            <p>Bio goes here: {this.props.store.listingClickedReducer.bio}</p>
          </div>
          <div className="modal-footer">
            <Button color="primary" type="button">
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
          </div>
        </Modal>
      </>
    );
  }
}

export default connect(mapStoreToProps)(MemberItem);
