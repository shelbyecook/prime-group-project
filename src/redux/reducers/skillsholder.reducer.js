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

const skillsholder = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SKILLS':
      return {
        leadership: action.payload[0],
        business: action.payload[1],
        marketing: action.payload[2],
        technical: action.payload[3],
        finance: action.payload[4],
        legal: action.payload[5],
        health: action.payload[6],
        hr: action.payload[7],
        education: action.payload[8],
        creatives: action.payload[9],
        communityAdvocacy: action.payload[10],
        civicEngagement: action.payload[11],
      };
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default skillsholder;
