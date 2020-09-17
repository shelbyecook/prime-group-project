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

class BusinessList extends React.Component {
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
          <td>{/*{this.props.business.fields.Name}*/}</td>
          <td>Test</td>
          <td>Test</td>
          <td>Test</td>
        </tr>
        {this.state.status ? (
          <tr>
            <td colSpan="4">test</td>
          </tr>
        ) : (
          ''
        )}
      </tbody>
    );
  }
}

export default connect(mapStoreToProps)(BusinessList);
