import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  CardBody,
  Container,
  Row,
  Col,
  Card,
  Table,
  CardHeader,
} from 'reactstrap';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SpeakerList from './SpeakerList';
import SpaceList from './SpaceList';
import BusinessList from './BusinessList';

class AboutPage extends Component {
  state = { defaultModal: false, isOpen: false };
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_AIRTABLE_SPEAKER',
    });
    this.props.dispatch({
      type: 'FETCH_AIRTABLE_SPACES',
    });
    this.props.dispatch({
      type: 'FETCH_AIRTABLE_BUSINESSES',
    });
  }

  //props.store.imageUrlReducer.avatarPath
  //Add onClick to change state from false to true, const className = object (with styles) = height (150px)
  //when state of expanded is false, height will = 0, when true, height becomes 150, and it expands
  // can add transition effects

  //onClick fx, method of the class
  //state true or false
  //style render/return - programatically written styles

  //<Table hover style={{ wordWrap: 'break-word' }}>
  render() {
    //toggleModal = (state) => {
    //  this.setState({
    //    [state]: !this.state[state],
    //  });
    //};
    //console.log(typeof this.props.store.speakers.records);
    //const closedFade = {
    //  top: '0',
    //  left: '0',
    //  backgroundImage: 'linear-gradient(to bottom, transparent, #f2f2f2)',
    //  transition: 'all 0.3s 0.08s ease-in-out',
    //};

    //const openFade = {
    //  top: '0',
    //  left: '0',
    //  backgroundImage: 'none',
    //  transition: 'all 0.3s 0.08s ease-in-out',
    //};

    //const closedHeight = {
    //  maxHeight: '150px',
    //  position: 'relative',
    //  top: '0',
    //  bottom: '0',
    //  overflow: 'hidden',
    //  zIndex: '0',
    //  transition: 'all 0.3s 0.08s cubic-bezier(.17,.67,.83,.67)',
    //};

    //const openHeight = {
    //  maxHeight: '100%',
    //  position: 'relative',
    //  top: '0',
    //  // bottom: '0',
    //  overflow: 'hidden',
    //  zIndex: '999',
    //  // transform: 'translate(0, 50px)',
    //  transition: 'all 0.3s 0.08s cubic-bezier(.17,.67,.83,.67)',
    //};
    return (
      <Container>
        {/* <Container className="pt-5">
          <Card>
            <CardHeader>
              <h3 className="display-2">Speakers</h3>
            </CardHeader>
            <CardBody>
              <Card
                //style={this.state.isOpen ? openHeight : closedHeight}
                style={{
                  background: 'linear-gradient(to right, #f2f2f2, #bc91d980)',
                }}
              >
                <Row>
                  <Col lg={3}>
                    {this.state.status ? (
                      <i
                        style={{ cursor: 'pointer' }}
                        className="ni ni-fat-delete"
                      />
                    ) : (
                      <i
                        style={{ cursor: 'pointer' }}
                        className="ni ni-fat-add"
                      />
                    )}
                  </Col>
                  <Col lg={4}>NAMES GO HERE</Col>
                  <Col lg={5}>
                    <p>DETAILS GO HERE</p>
                    <p>DETAILS GO HERE</p>
                    <p>DETAILS GO HERE</p>
                  </Col>
                </Row>
              </Card>
            </CardBody>
          </Card>
        </Container> */}

        <Card
          style={{ background: 'none', borderRadius: '0px', border: 'none' }}
          className="mt-5"
        >
          <CardHeader>
            <h3>Speakers</h3>
          </CardHeader>
          {this.props.store &&
            this.props.store.speakers &&
            this.props.store.speakers.map((speaker, index) => {
              return <SpeakerList speaker={speaker} key={index} />;
            })}
          <Container>
            {/*<CardBody>*/}
            <CardHeader>
              <h2>Spaces</h2>
            </CardHeader>
            {/*<Table hover>
              {' '}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Test</th>
                  <th>Test</th>
                  <th>Test</th>
                </tr>
              </thead>
              {this.props.store &&
                this.props.store.spaces &&
                this.props.store.spaces.map((space, index) => {
                  return <SpaceList space={space} key={index} />;
                })}
            </Table>*/}
          </Container>
          <Container>
            {/*<CardBody>*/}
            <CardHeader>
              <h2>Businesses</h2>
            </CardHeader>
            {/*<Table hover>
              {' '}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Test</th>
                  <th>Test</th>
                  <th>Test</th>
                </tr>
              </thead>
              {this.props.store &&
                this.props.store.businesses &&
                this.props.store.spaces.map((business, index) => {
                  return <BusinessList business={business} key={index} />;
                })}
            </Table>*/}
          </Container>
        </Card>
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(AboutPage);
