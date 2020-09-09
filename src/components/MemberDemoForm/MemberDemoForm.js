import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { useFormik } from 'formik';

// import reactstrap Styles/Components
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from 'reactstrap';

// Basic functional component structure for React with default state
// value setup.
function MemberAboutForm(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const [heading, setHeading] = useState('Functional Component');

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      setHeading(JSON.stringify(values, null, 2));
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <h2>{heading}</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default connect(mapStoreToProps)(MemberAboutForm);
