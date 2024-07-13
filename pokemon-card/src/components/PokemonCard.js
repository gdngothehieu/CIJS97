import React from 'react'
import styles from './PokemonCard.module.css'
export const PokemonCard = ({img,title,classes,id}) => {
  const clickPokemon = (title) => {
    alert(title + " xin chào!")
  }
  return (
    <div
    onClick={()=>{clickPokemon(title)}}

    className={styles.column}>
            
        <img className="imaging"
        src={img}
        />
        <h3 className="id-style">#{id}</h3>
        <h1 className="title-style">{title}</h1>
        <div>
        {
        classes.map((cl, index)=>{
          const pokemonClassStyle= {
            background: cl.color,
             width:'100px', 
             textAlign: 'center',
             padding: '5px',
             marginLeft: "10%",
             borderRadius: "15%"
        }
        const pokemonColumn = {
          
          marginLeft: "5px",
          marginRight: "5px",
          display: 'inline-block',

        }
          return <div keys={index} style={pokemonColumn}><p style={pokemonClassStyle}>{cl.title}</p></div>
        })
      }
        </div>
    </div>
  )
}
