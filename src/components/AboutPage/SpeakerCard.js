import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import React from 'react';

class SpeakerCard extends React.Component {
  state = {
    tr: false,
  };

  cellToggle = (event) => {
    this.setState({
      tr: !this.state.tr,
    });
  };

  expand = {};
  render() {
    return (
      <tbody>
        <tr>
          <td onClick={this.cellToggle}>
            <i class="ni ni-fat-add" />
          </td>
          <td>{this.props.speaker.fields.Name}</td>
          <td>{this.props.speaker.fields.Name}</td>
          <td>Test</td>
          <td>Test</td>
        </tr>
        {this.state.tr ? (
          <tr>
            <td>{this.props.speaker.fields.Name}</td>
          </tr>
        ) : (
          ''
        )}
      </tbody>
    );
  }
}

export default connect(mapStoreToProps)(SpeakerCard);
