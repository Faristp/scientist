export default function App() {
  return (
    <>
      <Toolbar
        onPlay={() => alert("playing Movie")}
        onUpload={() => alert("Uploading file")}
      />
    </>
  );
}

function Toolbar({ onPlay, onUpload }) {
  return (
    <>
      <Button onSmash={onPlay}>Play Button</Button>
      <Button onSmash={onUpload}>Upload Button</Button>
    </>
  );
}
function Button({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}
