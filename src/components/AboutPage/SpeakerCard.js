import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import React from 'react';

//implicitly importing the component
class SpeakerCard extends React.Component {
  state = {
    tr: false,
  };

  onExpand = (event) => {
    this.setState({
      tr: !this.state.tr, //evaluates value as opposite of what is current
    });
  };

  render() {
    const expand = {
      height: '150px',
    };
    const closed = {
      height: '0',
    };

    //style={this.state.tr ? expand : closed}
    return (
      <tbody>
        <tr>
          <td onClick={this.onExpand}>(-)</td>
          <td>{this.props.speaker.fields.Name}</td>
          <td>Test</td>
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
