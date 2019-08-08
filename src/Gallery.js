import React from 'react';
import Stack from './Stack';
import theblindside from "./img/theblindside.jpg";
import avatar from "./img/avatar.jpg";
import titanic from "./img/titanic.jpg";
import blackpanther from "./img/blackpanther.jpg";
import gameofthrone from "./img/gameofthrone.jpg";
import hobbsshaw from "./img/hobbsshaw.jpg";

export default function Gallery(){
    return ( 
    <>
      <div className="container">
          <Stack name="The Blind Side" logo={theblindside} />
          <Stack name="Avatar" logo={avatar} />
          <Stack name="Titanic" logo={titanic} />
      </div>
      <div className="container">
          <Stack name="Black Panther" logo={blackpanther} />
          <Stack name="Game of thrown" logo={gameofthrone} />
          <Stack name="Hobb & Shaw" logo={hobbsshaw} />
      </div> 
    </>
    );
  }