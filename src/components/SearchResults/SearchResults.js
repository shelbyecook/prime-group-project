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

  selectSkill = (i, skill) => () => {
    console.log(i, skill, this.state.selectedSkills);
    const newSkill = { id: i, skill };
    // TODO SORT THESE AND FILTER DUPLICATES
    this.props.dispatch({
      type: 'ADD_SKILL',
      payload: { id: i, skill },
    });
  };

  render() {
    return (
      <>
        {this.props.results.map((skill, i) => (
          <tr key={i}>
            <td scope="col">{skill}</td>
            {/*id: skill:*/}
            <td scope="col">
              <Button
                //   disabled={clicked}
                onClick={this.selectSkill(i, skill)}
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
