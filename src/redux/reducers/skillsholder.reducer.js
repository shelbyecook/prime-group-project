const skillObjs = [
  { id: 0, category: 'Leadership', skill: 'Skill1' },
  { id: 1, category: 'Leadership', skill: 'otherskill' },
  { id: 2, category: 'Leadership', skill: 'cool' },
  { id: 3, category: 'Leadership', skill: 'yep' },
  { id: 4, category: 'Leadership', skill: 'that works' },
  { id: 5, category: 'Leadership', skill: 'who...' },
  { id: 6, category: 'Leadership', skill: 'asked you' },
  { id: 7, category: 'Leadership', skill: 'alrighty then' },
  { id: 8, category: 'Leadership', skill: 'i like that' },
  { id: 9, category: 'Leadership', skill: 'me too' },
  { id: 10, category: 'Business and Entrepreneurship', skill: 'how many?' },
  { id: 11, category: 'Business and Entrepreneurship', skill: 'Skill2' },
];

const skillsholder = (state = skillObjs, action) => {
  switch (action.type) {
    case 'SET_SKILLS':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default skillsholder;
