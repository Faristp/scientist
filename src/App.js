import List from "./List.js";

export default function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 105 },
    { id: 3, name: "Orange", calories: 62 },
  ];
  const vegetables = [
    { id: 1, name: "Carrot", calories: 41 },
    { id: 2, name: "Broccoli", calories: 55 },
    { id: 3, name: "Spinach", calories: 23 },
  ];
  return (
    <>
      <List items={fruits} category="fruits" />
      <List items={vegetables} category="vegetables" />
    </>
  );
}
