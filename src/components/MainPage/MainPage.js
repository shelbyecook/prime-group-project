import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './MainPage.css';


//ReactStrap imports
import { Container, Row, Col, CardBody,} from 'reactstrap';
import {
    Card,
    CardImg,
    CardTitle,
    CardText,
    
  } from "reactstrap";
import memberskills from '../../redux/reducers/memberskills.reducer';


class MainPage extends Component{
    state = {
        first_name: "",
        last_name: "",
        headshot: "",
        organization_name: "",
        skill: "",
    };
    
    

    render() {
        const member = this.props.state;
        return(
            <Container className="spacing">
                <Row xs={2}>
                    <Col className="spacing">
                        <div class="list-group">
                            <button class="btn btn-secondary btn-lg">
                            <a class="list-group-item" href="#community"><i class="fa fa-users fa-3x" aria-hidden="true"></i>&nbsp;IHKC Community</a>
                            </button>
                        </div>
                    </Col>
                </Row>
            <Row xs={1}>
                <Col className="spacing-01">
                    <button class="btn btn-secondary btn-lg" >
                    <a class="list-group-item" href="#about"><i class="fa fa-microphone" aria-hidden="true"> </i>&nbsp; Find A Speaker</a>
                    </button>
                </Col>
                <Col className="spacing-01">
                    <button class="btn btn-secondary btn-lg">
                    <a class="list-group-item" href="#about"><i class="fa fa-building" aria-hidden="true"></i>&nbsp; Find A Space</a>
                    </button>
                </Col>
            </Row>
            <Card className="spacing" border="primary" style={{ width: '20 rem' }}>
                <CardImg className="card-img-top" style={{ width: "8rem" }}
                src='https://innovateher.s3.amazonaws.com/b3d6b4c6-7e50-4a27-ba9b-421cb2667d41_4199642B-38BB-4309-8C63-7FEF5904DFFB.jpeg'
                alt='Profile Img'
                />
                <Col lg={8}>
                    <CardTitle className="text-left">
                        Name: {this.props.store.user.first_name}
                    </CardTitle>
                </Col>
                <Col lg={8}>
                    <CardText>
                        Organization: 
                        {/* {this.props.store.about.organization_name} */}
                    </CardText>
                </Col>
                {/* speakerphoto.url */}
                    <CardBody>
                        <Row>
                            <CardText>
                                Skills: 
                                
                            </CardText>
                        </Row>
                        
                            <a href="#profile" role="button" aria-disabled="true" class="btn move fa fa-long-arrow-right">view profile</a>

                    </CardBody>
                </Card>
            </Container>
        );
    }
}


export default connect(mapStoreToProps)(MainPage);