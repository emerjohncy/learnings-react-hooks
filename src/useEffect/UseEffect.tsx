import { useEffect, useState } from "react";

export default function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // The code that we want to run
        console.log('The count is:', count);
    
        // Optional return function
        return () => {
          console.log('I am being cleaned up!');
        };
      }, [count]); // The dependency array

  return (
    <div>
      <h1>UseEffect Demo</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
