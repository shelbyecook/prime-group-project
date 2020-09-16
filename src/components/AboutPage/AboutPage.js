import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardBody, Container, Row, Col, Card } from 'reactstrap';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SpeakerCard from './SpeakerCard';
import SpaceCard from './SpaceCard';
import BusinessCard from './BusinessCard';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
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

  render() {
    console.log(typeof this.props.store.speakers.records);
    return (
      <CardBody>
        <Container>
          <h2>Speakers</h2>
          <Card>
            <Row>
              {this.props.store &&
                this.props.store.speakers &&
                this.props.store.speakers.map((speaker, index) => {
                  return <SpeakerCard speaker={speaker} key={index} />;
                })}
            </Row>
          </Card>
        </Container>
        <Container>
          <h2>Spaces</h2>
          <Card>
            <Row>
              {this.props.store &&
                this.props.store.spaces &&
                this.props.store.spaces.map((space, index) => {
                  return <SpaceCard space={space} key={index} />;
                })}
            </Row>
          </Card>
        </Container>
        <Container>
          <h2>Businesses</h2>
          <Card>
            <Row>
              {this.props.store &&
                this.props.store.businesses &&
                this.props.store.businesses.map((business, index) => {
                  return <BusinessCard business={business} key={index} />;
                })}
            </Row>
          </Card>
        </Container>
      </CardBody>
    );
  }
}

export default connect(mapStoreToProps)(AboutPage);
