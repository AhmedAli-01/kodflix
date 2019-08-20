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
          <Stack id='blind-side' name="The Blind Side" logo={theblindside} />
          <Stack id='avatar' name="Avatar" logo={avatar} />
          <Stack id='titanic' name="Titanic" logo={titanic} />
          <Stack id='black-panther' name="Black Panther" logo={blackpanther} />
          <Stack id='game-of-throne' name="Game of thrown" logo={gameofthrone} />
          <Stack id='hobbs-shaw' name="Hobb & Shaw" logo={hobbsshaw} />
      </div> 
    </>
    );
  }