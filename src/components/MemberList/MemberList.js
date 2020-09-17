import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

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
import MemberItem from '../MemberItem/MemberItem';

class MemberList extends Component {
  state = {
    heading: '',
  };

  render() {
    return (
      <Row>
        {this.props.store.memberListingsReducer.map((item, index) => {
          return (
            <Col key={index} lg={12}>
              <MemberItem key={item.email} member={item} {...this.props} />
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default connect(mapStoreToProps)(MemberList);
