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

//map((item, i) => {return items})
//change default state of reducer from array to an object
//response from saga airtable, instead of sending to reducer as an object in array, we'll send it as array to send in an array

const BusinessCard = (props) => {
  return (
    <Col lg={3}>
      <Card className="shadow mt-2 bg-dark">
        <CardBody>
          {' '}
          <CardTitle>{props.business.fields['Organization Name']}</CardTitle>
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

export default connect(mapStoreToProps)(BusinessCard);
