import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { Row, Col, Input, Table, Container } from 'reactstrap';
import SearchResults from '../SearchResults/SearchResults';
import ProfileResults from '../ProfileResults/ProfileResults';

// creating a Search functional component to reuse in search page and for skills
function ProfileOptions(props) {
  // Using hooks we're creating local state for a search Term and a search Result
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log(props.term, props.skills);
  useEffect(() => {
    let search = props.term;
    let list = props.skills;
    const results = list.filter(
      (skill) =>
        skill[search].toLowerCase().includes(searchTerm) ||
        skill[search].includes(searchTerm)
    );

    console.log(results);
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Input
              className="form-control-alternative"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <ProfileResults results={searchResults} />
        </Row>
      </Container>
    </div>
  );
}

export default connect(mapStoreToProps)(ProfileOptions);
