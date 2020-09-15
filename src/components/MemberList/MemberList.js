import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { Box, Grid } from '@material-ui/core';
import MemberItem from '../MemberItem/MemberItem';

class MemberList extends Component {
  state = {
    heading: '',
  };

  render() {
    return (
      <div>
        <Box m={3}>
          <Grid container spacing={3} alignItems="flex-start">
            {/* {this.props.store.membersReducer.map((item, index) => {
              return (
                <Grid item xs={4} key={index}>
                  <MemberItem member={item} index={index} {...this.props} />
                </Grid>
              );
            })} */}
          </Grid>
        </Box>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MemberList);
