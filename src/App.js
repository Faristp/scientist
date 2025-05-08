import { useState } from "react";

export default function App() {
  const initialList = [
    { id: 0, title: "friends", seen: true },
    { id: 1, title: "breaking Bad", seen: false },
    { id: 2, title: "ford vs ferrari", seen: true },
  ];

  const [list, setList] = useState(initialList);

  function handleToggle(showId, nextSeen) {
    setList(
      list.map((show) => {
        if (showId === show.id) {
          return { ...show, seen: nextSeen };
        } else {
          return show;
        }
      })
    );
  }
  return (
    <>
      <h2>Netflix series To watch</h2>
      <ListItems shows={list} onToggle={handleToggle} />
    </>
  );
}

function ListItems({ shows, onToggle }) {
  return (
    <ul>
      {shows.map((show) => (
        <li key={show.id}>
          <label>
            <input
              type="checkbox"
              checked={show.seen}
              onChange={(e) => {
                onToggle(show.id, e.target.checked);
              }}
            />
            {show.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
