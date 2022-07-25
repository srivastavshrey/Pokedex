import React from 'react'
import './style.scss'

const Modal = ( { data,closeModal } ) => {

    const { name,id,types,stats } = data

  return (
    <div className='modal' >
        <div className='modal-body' >
        <div className='cross' onClick={()=>{ closeModal(false) }}  >X</div>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
        <div className='pokemon-info' >
            <h2>Name: { name }</h2>
            <h3>Types: { types.map(item=>`${item.type.name}, `) }</h3>
            <h3>Id: {id}</h3>
            <br/>
            <h3>Stats:</h3>
            <ul>
              {stats.map(item=><li>{item.stat.name}: {item.base_stat}</li>)}
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Modal