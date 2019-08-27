import theblindside from "./img/theblindside.jpg";
import avatar from "./img/avatar.jpg";
import titanic from "./img/titanic.jpg";
import blackpanther from "./img/blackpanther.jpg";
import gameofthrone from "./img/gameofthrone.jpg";
import hobbsshaw from "./img/hobbsshaw.jpg";

export default function getGallery() {
    return [
      { id: 'blind-side', name:'The Blind Side', logo: theblindside },
      { id: 'avatar', name:'Avatar', logo: avatar },
      { id: 'titanic', name:'Titanic', logo: titanic },
      { id: 'black-panther', name:'Black Panther', logo: blackpanther },
      { id: 'game-of-throne', name:'Game Of Thrown', logo: gameofthrone },
      { id: 'hobbs-shaw', name:'Hobb & Shaw', logo: hobbsshaw }
    ]
    
  }