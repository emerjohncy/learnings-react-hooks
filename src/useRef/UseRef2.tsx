import { useEffect, useRef } from "react";
export default function UseRef2() {
    const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
        <h1>useRef Demo 2</h1>
      <input ref={inputRef} type="text" placeholder="Type something..." />
    </div>
  );
}
