const skillsholder = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SKILL':
      console.log(state);
      console.log(action.payload);
      const exists = state.filter((item) => {
        return item.id === action.payload.id;
      });
      console.log(exists);
      if (exists.length === 1) {
        return state;
      } else {
        return [...state, action.payload];
      }
    // case 'HOLD_DEMO':
    //   return { ...state, demo: action.payload };
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default skillsholder;
