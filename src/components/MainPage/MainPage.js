import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './MainPage.css';


class MainPage extends Component{
    state = {

    };

    render() {
        return(
            <div>
                <h2>MAIN PAGE</h2>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(MainPage);