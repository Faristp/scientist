export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert("Playing Movie")}
      onUploadImage={() => alert("Uploading")}
    />
  );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie} children="Play Movie" />
      <Button onClick={onUploadImage} children="Upload Image" />
    </div>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
