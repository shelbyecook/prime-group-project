import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Col,
} from 'reactstrap';

const SpeakerCard = (props) => {
  return (
    <Col lg={3}>
      <Card className="shadow mt-2 bg-dark">
        <CardBody>
          {' '}
          <CardTitle>{props.speaker.fields.Name}</CardTitle>
          <CardSubtitle>Subtitle</CardSubtitle>
        </CardBody>
        <img width="100%" src="" alt="Caption" />
        <CardBody>
          <CardText>Text</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
    </Col>
  );
};

export default connect(mapStoreToProps)(SpeakerCard);
