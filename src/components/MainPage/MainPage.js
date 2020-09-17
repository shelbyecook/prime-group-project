import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Skills from './Skills';
//import { useFormik } from 'formik';

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
import skillsholder from '../../redux/reducers/skillsholder.reducer';


class MainPage extends Component{
    
    componentDidMount() {
        this.props.dispatch({
          type: 'SET_SKILLS',
          payload: this.props.store.users_skills
        })}

state= {
        first_name: "",
        last_name: "",
        email: "",
        headshot: "",
        organization_name: "",
        skill: {},
};



    render() {

        console.log(this.props.state);
        
        return(
            <Container >
                <Row xs={2}>
                    <Col className="spacing">
                        <div className="list-group">
                            <button className="btn btn-secondary btn-lg">
                            <a className="list-group-item" href="#community"><i className="fa fa-users fa-3x" aria-hidden="true"></i>&nbsp;IHKC Community</a>
                            </button>
                        </div>
                    </Col>
                </Row>
            <Row className="text-right">
                <Col className="spacing-01">
                    <button className="btn btn-secondary btn-lg" >
                    <a className="list-group-item" href="#about"><i className="fa fa-microphone" aria-hidden="true"> </i>&nbsp; Find A Speaker</a>
                    </button>
                </Col>
                <Col className="spacing-01">
                    <button class="btn btn-secondary btn-lg">
                    <a className="list-group-item" href="#about"><i className="fa fa-building" aria-hidden="true"></i>&nbsp; Find A Space</a>
                    </button>
                </Col>
            </Row>
            <Card className="spacing" border="primary" style={{ width: '0 rem' }}>
                <CardImg className="card-img-top" style={{ width: "8rem" }}
                src= 'https://innovateher.s3.amazonaws.com/9600884e-c917-4022-a609-35bd568c55b0_A3E9E68F-7D8D-44E9-97D6-85A1A47873DE.jpeg'
                alt='Profile image'
                />
             <Col sm={4}>
                <CardTitle className="text-right">
                        Name: {this.props.store.user.first_name}
                </CardTitle>
            </Col>
                <Col sm={4}>
                    <CardText className="text-right">
                        email: {this.props.store.user.email}
                    </CardText>
                </Col>
                {/* speakerphoto.url */}
                    <CardBody>
                        <Row>
                        {this.props.store &&
              this.props.store.skills &&
              this.props.store.skills.map((skill, index) => {
                return <Skills skill={skill} key={index} />;
              })}
                            <CardText>
                                Skills:{this.props.store.skillsholder.skill_id}
                            </CardText>
                        </Row>
                        <Row>
                            <Col>
                            <a href="#profile" role="button" aria-disabled="true" className="btn fa fa-long-arrow-right">view profile</a>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        );
    }
}



export default connect(mapStoreToProps)(MainPage);