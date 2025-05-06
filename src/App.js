function Item({ name, isPacked }) {
  return (
    <li>
      {name}
      {isPacked && " ✔"}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <Item name="Car Key" isPacked={true} />
        <Item name="Sunglasses" isPacked={false} />
        <Item name="Food" isPacked={true} />
      </ul>
    </section>
  );
}
