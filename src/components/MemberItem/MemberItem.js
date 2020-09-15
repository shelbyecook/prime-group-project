import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { Box, Grid } from '@material-ui/core';

import {
  Container,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

class MemberItem extends Component {
  state = {};

  render() {
    const { member } = this.props;

    return (
      <Card style={{ width: '100%' }}>
        <CardBody>
          <CardTitle>Member Name Goes Here</CardTitle>
          <CardText>This is where the member info will be</CardText>
          <Button color="primary" onClick={(e) => e.preventDefault()}>
            Go somewhere
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default connect(mapStoreToProps)(MemberItem);
