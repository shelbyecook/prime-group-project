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

//import BootstrapTable from 'react-bootstrap-table-next';
//import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter'; //Want to add filtering

class SpeakerList extends React.Component {
  state = {
    status: false, //'false' = '+' AND 'true' = '-'
  };

  cellToggle = (event) => {
    this.setState({
      status: !this.state.status,
    });
  };

  render() {
    return (
      <tbody>
        <tr>
          <td onClick={this.cellToggle}>
            {' '}
            {this.state.status ? (
              <i style={{ cursor: 'pointer' }} class="ni ni-fat-delete" />
            ) : (
              <i style={{ cursor: 'pointer' }} class="ni ni-fat-add" />
            )}
          </td>
          <td>
            <Button color="link" size="sm">
              {this.props.speaker.fields.Name} {` `}
            </Button>
          </td>
          <td>{this.props.speaker.fields['Content Style']}</td>
          <td color="info">
            {this.props.speaker.fields.Title}
            {` at `}{' '}
            {/*Would like to differentiate role and organization. For instance, change the colors of each?*/}
            {this.props.speaker.fields.Organization}
          </td>
          <td>{this.props.speaker.fields['Speaker Fee']}</td>
        </tr>
        {this.state.status ? (
          <tr>
            {' '}
            {/*Want to add style so when the new row is added, there isn't a line separating the two rows.*/}
            <td>
              {/*Connect icon and node mailer*/}
              <i style={{ cursor: 'pointer' }} class="ni ni-email-83" />{' '}
            </td>
            <td colSpan="3"> {this.props.speaker.fields['Speaker Bio']} </td>{' '}
            {/*style={{ wordWrap: 'break-word' }}*/}
            {/*Can't seem to get the text contained. Maybe change table width?*/}
            <tr>
              <td>
                <i class="fa fa-linkedin-square" />
              </td>
            </tr>
          </tr>
        ) : (
          ''
        )}
      </tbody>
    );
  }
}

export default connect(mapStoreToProps)(SpeakerList);
