import { useState } from "react";
import { sculptureList } from "./data.js";

export default function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <div>
      <button onClick={handleNextClick}>Next</button>
      <h1>
        {sculpture.name} by {sculpture.artist}
      </h1>
      <p>
        {index + 1} of {sculptureList.length}
      </p>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "show More"} Details
      </button>
      <p>{showMore && sculpture.description}</p>
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  );
}
