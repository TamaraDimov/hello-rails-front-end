import { useEffect, useState } from 'react';

function Greeting() {
  const [randomGreeting, setRandomGreeting] = useState('');

  useEffect(() => {
    // Fetching the random greetings from the API endpoint
    fetch('/api/greetings/index')
      .then((response) => response.json())
      .then((data) => setRandomGreeting(data.greeting))
      .catch((error) => console.error(error));
  }, []);

  return <h1>{randomGreeting}</h1>;
}

export default Greeting;
