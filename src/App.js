import React from "react";
import "./App.css";
import theblindside from "./img/theblindside.jpg";
import avatar from "./img/avatar.jpg";
import titanic from "./img/titanic.jpg";
import blackpanther from "./img/blackpanther.jpg";
import gameofthrone from "./img/gameofthrone.jpg";
import hobbsshaw from "./img/hobbsshaw.jpg";



function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="headerItems">
          <img src={theblindside} alt="The Blind Side Movie Cover"/>
        </div>
        <div className="headerItems">
          <img src={avatar} alt="Avator Movie Cover" />
        </div>
        <div className="headerItems">          
          <img src={titanic} alt="Titnic Movie Cover" />
        </div>
      </div>
      <div className="container">
        <div className="headerItems">
          
          <img src={blackpanther}  alt="black panther cover" />
        </div>
        <div className="headerItems">          
          <img src={gameofthrone}  alt="Game of Throne Movie Cover"   />
        </div>
        <div className="headerItems">          
          <img src={hobbsshaw}   alt="Hobbs and Shaw Movie Cover" />
        </div>
      </div>
    </div>
  );
}

export default App;
