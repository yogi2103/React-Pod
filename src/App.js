import React from 'react';
import Ipod from './Ipod';

function App() {
  return (
    <div style={styles.imageContainer} className="App">
      <Ipod />
    </div>
  );
}

const styles={
  imageContainer : {
    //border:'1px solid black',
    height : '85vh',
    width : '100vw',
    backgroundImage : 'url("https://classroomclipart.com/images/gallery/Animations/Music/musical-notes-animation.gif")',
    backgroundSize : 'cover',
    //backgroundPosition : 'center',
    borderRadius : '0 12px 12px 0'
}
}

export default App;
