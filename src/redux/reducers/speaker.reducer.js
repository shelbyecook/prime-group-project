const speakerReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_AIRTABLE_SPEAKER':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default speakerReducer;
