export const getRandomGreeting = () => {
  return (dispatch) => {
    fetch('/api/greetings/index')
      .then((response) => response.json())
      .then((data) => dispatch(setRandomGreeting(data.greeting)))
      .catch((error) => console.error(error));
  };
};

export const setRandomGreeting = (greeting) => {
  return {
    type: 'SET_RANDOM_GREETING',
    greeting,
  };
};
