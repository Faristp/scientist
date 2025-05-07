import "./styles.css";
function List(props) {
  const category = props.category;
  const items = props.items;

  const listItems = items.map((item) => {
    return (
      <li key={item.id}>
        {item.name}:&nbsp; <b>{item.calories}</b>
      </li>
    );
  });
  return (
    <div>
      <h2 className="list-heading">{category}</h2>
      <ol className="list-container">{listItems}</ol>
    </div>
  );
}
export default List;
