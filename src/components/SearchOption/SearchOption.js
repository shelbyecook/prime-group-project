import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { Row, Col, Input, Table, Container } from 'reactstrap';
import SearchResults from '../SearchResults/SearchResults';

// creating a Search functional component to reuse in search page and for skills
function SearchOptions(props) {
  // Using hooks we're creating local state for a search Term and a search Result
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = props.skills.filter(
      (skill) =>
        skill.toLowerCase().includes(searchTerm) || skill.includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div>
      <Container>
        <Row>
          <Col lg={{ size: 6, offset: 3 }}>
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
          <Col
            lg={{ size: 6, offset: 3 }}
            style={{ height: '300px', overflow: 'scroll' }}
          >
            <Table>
              <thead className="thead-light">
                <tr>
                  <th colSpan="2">Skills</th>
                </tr>
              </thead>
              {/* {searchResults.map((item) => (
            <li>{item}</li>
          ))} */}
              <tbody>
                <SearchResults results={searchResults} />
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default connect(mapStoreToProps)(SearchOptions);
