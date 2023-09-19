const initialState = {
  randomGreeting: '', // Initialize with an empty string
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RANDOM_GREETING':
      return {
        ...state,
        randomGreeting: action.greeting, // Corrected 'greetings' to 'greeting'
      };
    default:
      return state;
  }
};

export default reducer;
