import theblindside from "./img/theblindside.jpg";
import avatar from "./img/avatar.jpg";
import titanic from "./img/titanic.jpg";
import blackpanther from "./img/blackpanther.jpg";
import gameofthrone from "./img/gameofthrone.jpg";
import hobbsshaw from "./img/hobbsshaw.jpg";

export default function getGallery() {
  return [{
      id: 'blind-side',
      name: 'The Blind Side',
      logo: theblindside,
      details: 'The Blind Side is a 2009 American biographical sports drama film written and directed by John Lee Hancock, based on the 2006 book The Blind Side: Evolution of a Game by Michael Lewis. The storyline features Michael Oher, an offensive lineman who was drafted by the Baltimore Ravens of the National Football League (NFL).'
    },
    {
      id: 'avatar',
      name: 'Avatar',
      logo: avatar,
      details: 'On the lush alien world of Pandora live the Na\'vi, beings who appear primitive but are highly evolved. Because the planet\'s environment is poisonous, human/Na\'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na\'vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world.'
    },
    {
      id: 'titanic',
      name: 'Titanic',
      logo: titanic,
      details: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the "ship of dreams" -- which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912.'
    },
    {
      id: 'black-panther',
      name: 'Black Panther',
      logo: blackpanther,
      details: 'After the death of his father, T\'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T\'Challa\'s mettle as king -- and as Black Panther -- gets tested when he\'s drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.'
    },
    {
      id: 'game-of-throne',
      name: 'Game Of Thrown',
      logo: gameofthrone,
      details: 'Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, George R. R. Martin\'s series of fantasy novels, the first of which is A Game of Thrones.'
    },
    {
      id: 'hobbs-shaw',
      name: 'Hobb & Shaw',
      logo: hobbsshaw,
      details: 'As expected, the international box office is responsible for much of that haul with $525 million to date. “Hobbs & Shaw” remains a big draw in China, where it earned another $27.9 million this weekend, boosting its tally in that territory to $166 million. The movie opened in its final territory, Greece, with $300,000'
    }
  ]

}