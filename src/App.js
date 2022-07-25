import axios from "axios";
import React,{ useEffect, useState } from "react";
import Modal from "./Modal";
import PokeCard from "./PokeCard";
import './style.scss'

const App = ()=>{

  const [pokemonList,setPokemonList] = useState([])
  const [next,setNext]=useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
  const [prev,setPrev]=useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
  const [ openModal,setOpenModal ]=useState(false)
  const [ modalData,setModalData ]=useState()
  const [ search,setSearch ]=useState('')


  console.log(search)


  const fetchPokemonList = async( previous )=>{
    
    const { data } = previous === true ?  await axios.get(prev):await axios.get(next)
    setNext(data.next)
    setPrev(data.previous)
    const createPokemonData = ( results )=>{
      results.forEach( async(item) => {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
        setPokemonList(item=>[...item,data])
      });
    }
    await createPokemonData(data.results)
  }


  useEffect(()=>{
    fetchPokemonList()
    // eslint-disable-next-line
  },[])

  console.log(pokemonList)

  return (
    <>
    <div className="App">
      <h1>Pokedex</h1>
      <div className="search" >
        <input type={'text'} onChange={(e)=>{ setSearch(e.target.value) }} placeholder='Search...' />
      </div>
      <div className="card-container" >
      { pokemonList.map((item,idx)=><div onClick={()=>{ setModalData(item);setOpenModal(true) }} ><PokeCard key={idx} data={ item } /></div>) }
      </div>
      <div className="prev-next" >
        <button onClick={()=>{ setPokemonList([]);fetchPokemonList(true) }} >Prev</button>
        <button onClick={()=>{ setPokemonList([]);fetchPokemonList(false) }} >Next</button>
      </div>
    </div>
    { openModal && <Modal data={ modalData } closeModal={setOpenModal} /> }
    </>
  );
}

export default App;
