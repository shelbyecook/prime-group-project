import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { Input } from 'reactstrap';

const skills = [
  'Active listening',
  'Adaptability',
  'Advising',
  'Analytical thinking',
  'Business knowledge',
  'Caring',
  'Coaching',
  'Collaboration',
  'Communication',
  'Conceptual thinking',
  'Cooperation',
  'Creativity',
  'Critical thinking',
  'Curiosity',
  'Decision making',
  'Delegation',
  'Diplomacy',
  'Emotional intelligence',
  'Executive presence',
  'Flexibility',
  'Initiative',
  'Innovation',
  'Integrity',
  'Motivation',
  'Negotiating',
  'Networking',
  'Patience',
  'Perseverance',
  'Planning',
  'Presenting',
  'Problem solving',
  'Productivity',
  'Respect',
  'Responsibility',
  'Sense of humor',
  'Sharing',
  'Strategic thinking',
  'Troubleshooting',
];

// creating a Search functional component to reuse in search page and for skills
function SearchOptions(props) {
  // Using hooks we're creating local state for a search Term and a search Result
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = skills.filter(
      (skill) =>
        skill.toLowerCase().includes(searchTerm) || skill.includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <Input
        className="form-control-alternative"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <div style={{ height: '50px', overflow: 'scroll' }}>
        <ul>
          {searchResults.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default connect(mapStoreToProps)(SearchOptions);
