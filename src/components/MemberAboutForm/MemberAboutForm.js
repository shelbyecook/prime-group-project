import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { useFormik } from 'formik';

// import reactstrap Styles/Components
import {
  FormGroup,
  Form,
  Input,
  Label,
  Button,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Card,
  CardBody,
  Row,
  Col,
  Container,
} from 'reactstrap';

// Basic functional component structure for React with default state
// value setup.
function MemberAboutForm(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const [heading, setHeading] = useState('Functional Component');

  const formik = useFormik({
    initialValues: {
      role: '', // string
      organization: '', // string
      displayName: '', // string
      jobTitle: '', // string
      streetAddress: '', // string
      city: '', // string
      state: '', // string
      zipcode: '', // number
      linkedin: '', // string
      facebook: '', // string
      twitter: '', // string
      profilePic: '', // string
      bio: '', // string
      shirtSize: '', // string
    },
    onSubmit: (values) => {
      setHeading(JSON.stringify(values, null, 2));
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Container>
        <Card>
          <CardBody>
            <Form onSubmit={formik.handleSubmit}>
              <Row>
                <Col>
                  <FormGroup>
                    <Label htmlFor="email">Community Role: </Label>
                    <Input
                      className="form-control-alternative"
                      id="role"
                      name="role"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.role}
                    />
                  </FormGroup>
                  <Label htmlFor="organization">Organization: </Label>
                  <Input
                    className="form-control-alternative"
                    id="organization"
                    name="organization"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.organization}
                  />
                  <Label htmlFor="name">Display Name: </Label>
                  <Input
                    className="form-control-alternative"
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.displayName}
                  />
                  <Label htmlFor="title">Job Title: </Label>
                  <Input
                    className="form-control-alternative"
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                  />
                  <Label htmlFor="address">Street Address</Label>
                  <Input
                    className="form-control-alternative"
                    id="address"
                    name="address"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.streetAddress}
                  />
                  <Label htmlFor="city">City: </Label>
                  <Input
                    className="form-control-alternative"
                    id="city"
                    name="city"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                  />
                  <Label htmlFor="state">State: </Label>
                  <Input
                    className="form-control-alternative"
                    id="state"
                    name="state"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.state}
                  />
                  <Label htmlFor="zipcode">Zipcode: </Label>
                  <Input
                    className="form-control-alternative"
                    id="zipcode"
                    name="zipcode"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.zipcode}
                  />
                  <Row>
                    <Col lg={4}>
                      <Label htmlFor="linkedin">LinkedIn: </Label>
                      <Input
                        className="form-control-alternative"
                        id="linkedin"
                        name="linkedin"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.linkedin}
                      />
                    </Col>
                    <Col lg={4}>
                      <Label htmlFor="facebook">Facebook: </Label>
                      <Input
                        className="form-control-alternative"
                        id="facebook"
                        name="facebook"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.facebook}
                      />
                    </Col>
                    <Col lg={4}>
                      <Label htmlFor="twitter">Twitter: </Label>
                      <Input
                        className="form-control-alternative"
                        id="twitter"
                        name="twitter"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.twitter}
                      />
                    </Col>
                  </Row>
                  <h1>Profile Picture: 'will contain S3 upload field'</h1>
                  <Label htmlFor="bio">Bio: </Label>
                  <Input
                    className="form-control-alternative"
                    id="bio"
                    name="bio"
                    type="textarea"
                    onChange={formik.handleChange}
                    value={formik.values.bio}
                  />
                  <Label htmlFor="shirtsize">T-Shirt Size: </Label>
                  <Input type="select" className="form-control-alternative">
                    <option value="">Select a T-Shirt Size</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                  </Input>
                  <Row>
                    <Button
                      outline
                      color="warning"
                      style={{ border: '1px solid #F59032', color: '#F59032' }}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}

export default connect(mapStoreToProps)(MemberAboutForm);
