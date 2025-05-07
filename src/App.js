import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleChangeName(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleChangeTitle(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleChangeCity(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }
  function handleChangeImage(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }

  return (
    <>
      <label>
        Name:
        <input value={person.name} onChange={handleChangeName} />
      </label>

      <lable>
        Artwork:
        <input value={person.artwork.title} onChange={handleChangeTitle} />
      </lable>
      <label>
        City:
        <input value={person.artwork.city} onChange={handleChangeCity} />
      </label>
      <label>
        Image:
        <input value={person.artwork.image} onChange={handleChangeImage} />
      </label>
      <h1>{person.name}</h1>
      <h2>{person.artwork.title}</h2>
      <h3>{person.artwork.city}</h3>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}
