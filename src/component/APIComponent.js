import React, { useState, useEffect } from "react";
function APIComponent() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(null); // Initialize state to store fetched data

  useEffect(() => {
    // Fetch data when the component mounts or when counter changes
    fetch("https://jsonplaceholder.typicode.com/comments") // API endpoint for comments
      .then((res) => res.json())
      .then((data) => setData(data)); // Correctly set the fetched data
  }, [counter]); // Dependency on `counter` ensures effect runs when counter changes

  const increaseFunc = () => {
    setCounter(counter + 1);
  };

  const decreaseFunc = () => {
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <button onClick={increaseFunc}>+</button>
      <span>{counter}</span>
      <button onClick={decreaseFunc}>-</button>

      {data ? (
        <div>
          {console.log(data.slice(1, 5))}
          <h3>Fetched Emails:</h3>
          <ul>
            {data.slice(1, 4).map((comment, index) => (
              <li key={index}>{comment.email}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default APIComponent;
