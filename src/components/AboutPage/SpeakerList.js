import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import React from 'react';
import {
  Button,
  ButtonToggle,
  ButtonDropdown,
  DropdownToggle,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

class SpeakerList extends React.Component {
  state = {
    status: false, //'false' = '+' AND 'true' = '-'
  };

  cellToggle = (event) => {
    this.setState({
      status: !this.state.status,
    });
  };
  //style={{styling goes here in JSX format}} add to element
  render() {
    return (
      <tbody>
        <tr>
          <td onClick={this.cellToggle}>
            {' '}
            {this.state.status ? (
              <i class="ni ni-fat-delete" />
            ) : (
              <i class="ni ni-fat-add" />
            )}
          </td>
          <td>
            {/*Considering making the person's name "click-able" to view their profile.*/}
            {/*<Button>*/}
            {this.props.speaker.fields.Name}
            {/*<Button>*/}
          </td>
          <td>{this.props.speaker.fields['Content Style']}</td>
          <td>
            {this.props.speaker.fields.Title}
            {` at `}{' '}
            {/*Would like to differentiate role and organization. For instance, change the colors of each?*/}
            {this.props.speaker.fields.Organization}
          </td>
          <td>{this.props.speaker.fields['Speaker Fee']}</td>
        </tr>
        {this.state.status ? (
          <tr>
            <td>
              {/*Connect icon and node mailer*/}
              <i class="ni ni-email-83" />{' '}
            </td>
            <td colSpan="3"> {this.props.speaker.fields['Speaker Bio']} </td>{' '}
            {/*style={{ wordWrap: 'break-word' }}*/}
            {/*Can't seem to get the text contained. Maybe change table width?*/}
          </tr>
        ) : (
          ''
        )}
      </tbody>
    );
  }
}

export default connect(mapStoreToProps)(SpeakerList);
