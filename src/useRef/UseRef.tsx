// import { useState, useRef } from "react";
// export default function UseRef() {
//     const [count, setCount] = useState(0);
//   const countRef = useRef(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//     countRef.current++;

//     console.log("State:", count);
//     console.log("Ref:", countRef.current);
//   };

//   return (
//     <div>
//         <h1>UseRef Demo 1</h1>
//         <div>Count: {count}</div>
//         <button onClick={handleIncrement}>Increment</button>
//         <h1>UseRef Demo 2</h1>
//     </div>
//   )
// }

import { useRef } from "react";
export default function UseRef() {
  const countRef = useRef(0);

  const handleIncrement = () => {
    countRef.current++;

    console.log("Ref:", countRef.current);
  };

  return (
    <div>
        <h1>UseRef Demo 1</h1>
        <div>Count: {countRef.current}</div>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}