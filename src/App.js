import { people } from "./data.js";
import getImageUrl from "./utils.js";

export default function List() {
  const listItems = people.map((person) => (
    <li key={person.id} style={{ display: "flex", marginBottom: "10px" }}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
        style={{ borderRadius: "50%", marginRight: "100px" }}
      />
      <p style={{ maxWidth: "400px" }}>
        <b>{person.name}:</b>
        {" " + person.profession} known for {person.accomplishment}
        <br />
      </p>
    </li>
  ));

  return (
    <article>
      <h1 style={{ marginLeft: "40px" }}> Scientist</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
