import React from 'react';
import javascriptLogo from './javascript-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
     <img src = {javascriptLogo} alt='JavaScript Logo' />

     <br />  <br />  <br />
     <div className="header">
      <div className="headerItems"> <img src="https://img.moviepostershop.com/titanic-movie-poster-1997-1020339699.jpg" alt="Titnic Movie Cover"></img> </div>
      <div className="headerItems"> <img src="https://i.pinimg.com/236x/1d/42/8f/1d428fc1bb6d2c3528c02753d6b3559e--james-cameron-james-darcy.jpg" alt="Avator Movie Cover"></img>  </div>
      <div className="headerItems"> <img src="https://i.pinimg.com/originals/50/b8/97/50b8973ec083d449d20b73222f2b2d56.jpg" alt="Titnic Movie Cover"></img>  </div>
     </div>
     <div className="header">
      <div className="headerItems"> <img src="https://img.moviepostershop.com/titanic-movie-poster-1997-1020339699.jpg" alt="Titnic Movie Cover"></img>  </div>
      <div className="headerItems"> <img src="https://img.moviepostershop.com/titanic-movie-poster-1997-1020339699.jpg" alt="Titnic Movie Cover"></img>  </div>
      <div className="headerItems"> <img src="https://img.moviepostershop.com/titanic-movie-poster-1997-1020339699.jpg" alt="Titnic Movie Cover"></img>  </div>
      <p> hi there</p>
     </div>
    </div>
  );
}

export default App;