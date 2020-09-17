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
  state = {
    heading: 'Airtable test',
  };

  //props.store.imageUrlReducer.avatarPath
  //Add onClick to change state from false to true, const className = object (with styles) = height (150px)
  //when state of expanded is false, height will = 0, when true, height becomes 150, and it expands
  // can add transition effects

  //onClick fx, method of the class
  //state true or false
  //style render/return - programatically written styles

  //<Table hover style={{ wordWrap: 'break-word' }}>
  render() {
    console.log(typeof this.props.store.speakers.records);
    return (
      //<Container>
      <CardBody>
        <Container>
          <CardHeader>
            <h3>Speakers</h3>
          </CardHeader>
          <Table>
            {' '}
            {/*hover*/}{' '}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Contact Info</th>
              </tr>
            </thead>
            {this.props.store &&
              this.props.store.speakers &&
              this.props.store.speakers.map((speaker, index) => {
                return <SpeakerList speaker={speaker} key={index} />;
              })}
          </Table>
        </Container>
        {/*</CardBody>*/}
        <Container>
          {/*<CardBody>*/}
          <CardHeader>
            <h2>Spaces</h2>
          </CardHeader>
          <Table hover>
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
          </Table>
        </Container>
        <Container>
          {/*<CardBody>*/}
          <CardHeader>
            <h2>Businesses</h2>
          </CardHeader>
          <Table hover>
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
          </Table>
        </Container>
      </CardBody>
      //</Container>
    );
  }
}

export default connect(mapStoreToProps)(AboutPage);
