import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class NodeMailer extends Component {
  render() {
    return (
      <div>
        <form></form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NodeMailer);
