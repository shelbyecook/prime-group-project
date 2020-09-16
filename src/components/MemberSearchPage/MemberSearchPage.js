import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import {
  Row,
  Col,
  Input,
  Container,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';
import MemberList from '../MemberList/MemberList';

class MemberSearchPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_ALL_PROFILES',
    });
  }
  state = {
    heading: 'Member Search Page',
  };

  render() {
    return (
      <>
        <h2>{this.state.heading}</h2>
        <Input
          className="form-control-alternative"
          type="text"
          placeholder="Search"
        />
        <Container>
          <MemberList />
        </Container>
      </>
    );
  }
}

export default connect(mapStoreToProps)(MemberSearchPage);
