import { useMemo, useState } from "react";
import { initialItems } from "./utils";

export default function UseMemo() {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    // const selectedItem = items.find((item) => item.isSelected);

    const selectedItem = useMemo(
      () => items.find((item) => item.isSelected),
      [items],
    );

    // const selectedItem = useMemo(
    //     () => items.find((item) => item.id === count),
    //     [count, items],
    //   );
      
  return (
    <div>
        <h1>UseMemo Demo</h1>
        <p>Count: {count}</p>
        <p>Selected Item: {selectedItem?.id}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
