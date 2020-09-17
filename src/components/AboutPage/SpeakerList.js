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
              <i style={{ cursor: 'pointer' }} className="ni ni-fat-delete" />
            ) : (
              <i style={{ cursor: 'pointer' }} className="ni ni-fat-add" />
            )}
          </td>
          <td>
            <Button color="link" size="sm">
              {this.props.speaker.fields.Name} {` `}
            </Button>
          </td>
          <td>
            <ul style={{ listStyleType: 'none' }}>
              <li>
                <i style={{ cursor: 'pointer' }} className="ni ni-email-83" />
                {this.props.speaker.fields.Email}
              </li>
              <li>
                <i
                  style={{ cursor: 'pointer' }}
                  className="ni ni-mobile-button"
                />
                {this.props.speaker.fields['Phone Number']}
              </li>
            </ul>
          </td>
        </tr>
        {this.state.status ? (
          <tr>
            {' '}
            {/*Want to add style so when the new row is added, there isn't a line separating the two rows.*/}
            <td></td>
            <td colSpan="3">
              {' '}
              {this.props.speaker.fields['Speaker Bio']}{' '}
            </td>{' '}
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
