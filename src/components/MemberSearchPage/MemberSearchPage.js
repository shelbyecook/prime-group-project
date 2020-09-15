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
import { Grid } from '@material-ui/core';
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
      <Container>
        <h2>{this.state.heading}</h2>
        <Grid alignItems="center" container spacing={5}>
          <Grid item xs={8}>
            <Input
              className="form-control-alternative"
              type="text"
              placeholder="Search"
              //   value={searchTerm}
              //   onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            {/* </Col>
            <Col sm="4"> */}
            <Button>Search</Button>
          </Grid>
        </Grid>
        <Grid container>
          <MemberList />
        </Grid>
        {/* </Col>
          </Row> */}

        {/* <Row> */}
        {/* <Card style={{ width: '100%' }}>
          <CardBody>
            <CardTitle>Member Name Goes Here</CardTitle>
            <CardText>This is where the member info will be</CardText>
            <Button color="primary" onClick={(e) => e.preventDefault()}>
              Go somewhere
            </Button>
          </CardBody>
        </Card> */}
        {/* </Row> */}
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(MemberSearchPage);
