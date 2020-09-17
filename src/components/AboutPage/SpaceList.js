import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import React from 'react';
import {
  ButtonToggle,
  ButtonDropdown,
  DropdownToggle,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

class SpaceList extends React.Component {
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
          <td>{this.props.space.fields['Space Name']}</td>
          <td>{this.props.space.fields['Contact Person']}</td>
          <td>Test</td>
          <td>Test</td>
        </tr>
        {this.state.status ? (
          <tr>
            <td colSpan="4">{this.props.space.fields['Contact Email']}</td>
          </tr>
        ) : (
          ''
        )}
      </tbody>
    );
  }
}

export default connect(mapStoreToProps)(SpaceList);
