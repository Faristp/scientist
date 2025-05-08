export default function App() {
  return (
    <>
      <form
        onSubmit={(e) => {
          alert("submiting");
          e.preventDefault();
        }}
      >
        <input />
        <button onClick={() => alert("clikced")}>Send</button>
      </form>
    </>
  );
}
