import { useState } from "react";

export default function UseState(){
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>useState Demo</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};
