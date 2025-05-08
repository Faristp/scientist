function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ moviename }) {
  function handleClick() {
    alert("Playing " + moviename);
  }
  return <Button onClick={handleClick}>play {moviename}</Button>;
}

function UploadButton() {
  return (
    <Button
      onClick={() => {
        alert("Uploading");
      }}
    >
      Upload
    </Button>
  );
}

export default function Toolbar() {
  return (
    <>
      <PlayButton moviename="ford vs ferrari" />
      <UploadButton />
    </>
  );
}
