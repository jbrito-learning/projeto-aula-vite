import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => incrementCounter()}>Increment</button>
    </div>
  );
};

export default Counter;
