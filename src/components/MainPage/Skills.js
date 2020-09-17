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

class Skills extends React.Component {
  
  render() {
    return (
        <div>
      <p>{this.props.skill}
          </p>
          </div>
    )   
}}

export default connect(mapStoreToProps)(Skills);
