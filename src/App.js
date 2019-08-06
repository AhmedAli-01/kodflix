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
        <div className="containerItem">
          <img src={theblindside} alt="The Blind Side Movie Cover"/>
          <div className='overlay'>
            <h1>The Blind Side</h1>
            </div>
        </div>
        <div className="containerItem">
          <img src={avatar} alt="Avator Movie Cover" />
          <div className='overlay'>
            <h1>Avatar</h1>
            </div>
        </div>
        <div className="containerItem">          
          <img src={titanic} alt="Titnic Movie Cover" />
          <div className='overlay'>
            <h1>Titanic</h1>
            </div>         
        </div>
      </div>
      <div className="container">
        <div className="containerItem">          
          <img src={blackpanther}  alt="black panther cover" />
          <div className='overlay'>
            <h1>Black Panther</h1>
            </div>
        </div>
        <div className="containerItem">          
          <img src={gameofthrone}  alt="Game of Throne Movie Cover" />
          <div className='overlay'>
            <h1>Game of Thron</h1>
            </div>
        </div>
        <div className="containerItem">          
          <img src={hobbsshaw}   alt="Hobbs and Shaw Movie Cover" />
          <div className='overlay'>
            <h1>Hobbs & Shaw</h1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
