import { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);

  function increment() {
    setScore((score) => score + 1);
  }
  function decrement() {
    setScore((score) => score - 1);
  }

  return (
    <>
      <button onClick={increment}>+1</button>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        -1
      </button>

      <h1>{score}</h1>
    </>
  );
}
