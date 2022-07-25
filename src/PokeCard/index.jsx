import React from 'react'
import './style.scss'

const PokeCard = ( { data } ) => {

    const { id,name,types } = data

  return (
    <div className='pokemon-card' >
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
        <div className='pokemon-info' >
            <h4>Name: { name }</h4>
            <h5>Types: { types.map(item=>`${item.type.name}, `) }</h5>
            <h5>Id: {id}</h5>
        </div>
    </div>
  )
}

export default PokeCard