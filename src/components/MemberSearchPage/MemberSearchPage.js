import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import {
  Button,
  ButtonGroup,
  Row,
  Col,
  Input,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';
import MemberList from '../MemberList/MemberList';
import SearchOption from '../SearchOption/SearchOption';
import ProfileSearch from '../ProfileSearch/ProfileSearch';

class MemberSearchPage extends Component {
  state = {
    searchTerm: 'community_role',
  };
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_ALL_PROFILES',
    });
  }

  buttonClick = (selected) => {
    console.log(selected);
    this.setState({
      rSelected: selected,
    });
    switch (selected) {
      // case 1:
      //   this.setState({
      //     searchTerm: 'skills',
      //   });
      //   break;
      case 2:
        this.setState({
          searchTerm: 'community_role',
        });
        break;
      case 3:
        this.setState({
          searchTerm: 'organization_name',
        });
        break;
    }
  };

  render() {
    return (
      <>
        <Container>
          <Row className="mt-4">
            <Col lg={12}>
              <Card>
                <CardBody>
                  <h1>Search the Community and Connect with Womxn!</h1>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <ButtonGroup>
            {/* <Button
              color="primary"
              onClick={() => this.buttonClick(1)}
              active={this.state.rSelected === 1}
            >
              Skills
            </Button> */}
            <Button
              color="primary"
              onClick={() => this.buttonClick(2)}
              active={this.state.rSelected === 2}
            >
              Community Role
            </Button>
            <Button
              color="primary"
              onClick={() => this.buttonClick(3)}
              active={this.state.rSelected === 3}
            >
              Organization Name
            </Button>
          </ButtonGroup>
          <ProfileSearch
            skills={this.props.store.memberListingsReducer}
            term={this.state.searchTerm}
          />
        </Container>
      </>
    );
  }
}

export default connect(mapStoreToProps)(MemberSearchPage);
