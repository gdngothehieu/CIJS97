import logo from './logo.svg';
import './App.css';
import { PokemonCard } from './components/PokemonCard';
import { useState } from 'react';

function App() {
  const [cardList, setCardList] = useState([
    {
      id: "0001",
      title: "Bulbasaur",
      class: [
        {
          title: "Grass",
          color: "#87A96B"
        },
        {
          title: "Poison",
          color: "purple"
        }
      ],
      img: "./pokemon-images/001.png"
    },
    {
      id: "0002",
      title: "Ivysaur",
      class: [ 
        {
        title: "Grass",
        color: "green"
        },
        {
          title: "Poison",
          color: "purple"
        }
    ],
      img: "./pokemon-images/002.png"
    },
    {
      id: "0003",
      title: "Venusaur",
      class: [ 
        {
        title: "Grass",
        color: "green"
        },
        {
          title: "Poison",
          color: "purple"
        }
    ],
      img: "./pokemon-images/003.png"
    },{
      id: "0004",
      title: "Charmander",
      class: [ 
        {
        title: "Fire",
        color: "orange"
        }
    ],
      img: "./pokemon-images/004.png"
    },{
      id: "0005",
      title: "Charmaleon",
      class: [ 
        {
        title: "Fire",
        color: "orange"
        }
    ],
      img: "./pokemon-images/005.png"
    },
    {
      id: "0006",
      title: "Charizard",
      class: [ 
        {
        title: "Fire",
        color: "orange"
        },
        {
          
          title: "Flying",
          color: "grey"
        }
        
    ],
      img: "./pokemon-images/006.png"
    },
    {
      id: "0007",
      title: "Squirtle",
      class: [ 
        {
        title: "Water",
        color: "#7CB9E8"
        }
    ],
      img: "./pokemon-images/007.png"
    },
    {
      id: "0008",
      title: "Wartortle",
      class: [ 
        {
        title: "Water",
        color: "#7CB9E8"
        }
    ],
      img: "./pokemon-images/008.png"
    },
    {
      id: "0009",
      title: "Blastoise",
      class: [ 
        {
        title: "Water",
        color: "#7CB9E8"
        }
    ],
      img: "./pokemon-images/009.png"
    },
    {
      id: "0010",
      title: "Caterpie",
      class: [ 
        {
        title: "Bug",
        color: "#87A96B"
        }
    ],
      img: "./pokemon-images/010.png"
    },
    {
      id: "0011",
      title: "Metapod",
      class: [ 
        {
        title: "Bug",
        color: "#87A96B"
        }
    ],
      img: "./pokemon-images/011.png"
    },{
      id: "0012",
      title: "Butterfree",
      class: [ 
        {
        title: "Bug",
        color: "#87A96B"
        },
        {
          title: "Flying",
          color: "grey"
        }
    ],
      img: "./pokemon-images/012.png"
    },
  ]);

  return (
    <div className="container">
       
      {
        cardList.map((card, index)=>{
          return <PokemonCard 
          keys={index}
          img={card.img}
          title={card.title}
          classes={card.class}
          id={card.id}
          />
        })
      }
    </div>
  );
}

export default App;
