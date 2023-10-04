/*eslint-disable*/
// Greeting.js
import { useEffect, useState } from 'react';

function Greeting() {
  const [randomGreeting, setRandomGreeting] = useState('');

  useEffect(() => {
    // Fetch the random greeting from the API endpoint
    fetch('http://127.0.0.1:3000/random_greeting')
      .then((response) => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then((data) => {
        console.log('Response data:', data);
        setRandomGreeting(data.greeting);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setRandomGreeting('Error: Unable to fetch data');
      });
  }, []);

  return <h1>{randomGreeting}</h1>;
}

export default Greeting;
