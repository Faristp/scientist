function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (  
    <section style={{padding:'10px'}} >
      <h1>Gallery</h1>
      <div style={{display:'flex', flexWrap:'wrap', gap:'10px'}}>
        <Profile/>
        <Profile/> 
        <Profile/>
      </div>
      
    </section>
  );
}