import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SearchOption from '../SearchOption/SearchOption';

import { Button } from 'reactstrap';
// Displays results when placed in the Search Option map function
class SearchResults extends Component {
  state = {
    selectedSkills: [],
  };

  selectSkill = (skill) => () => {
    this.props.dispatch({
      type: 'ADD_SKILL',
      payload: skill,
    });
  };

  render() {
    return (
      <>
        {this.props.results.map((skill, i) => (
          <tr key={skill.id}>
            <td scope="col">{skill.skill}</td>
            {/*id: skill:*/}
            <td scope="col">
              <Button
                //   disabled={clicked}
                onClick={this.selectSkill(skill)}
                outline
                color="primary"
              >
                Add Skill
              </Button>
            </td>
          </tr>
        ))}
      </>
    );
  }
}

export default connect(mapStoreToProps)(SearchResults);
