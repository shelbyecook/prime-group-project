import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SearchOption from '../SearchOption/SearchOption';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class SkillsWidget extends Component {
  state = {
    selectedSkills: [],
  };

  selectSkill = () => {};

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <SearchOption />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(SkillsWidget);
