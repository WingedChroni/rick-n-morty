import React, {useEffect, useState} from 'react'
import "./HomePage.css";
import axios from 'axios';
import CharacterCard from '../../Components/CharacterCard/CharacterCard';
import Search from '../../Components/Search/Search';

function HomePage() {

    //create state to store characters
    const [characters, setCharacters] = useState([]);


    //https://rickandmortyapi.com/api/character

    //I need to make api call when the page loads
    useEffect(
        ()=>{
            console.log('homepage loaded');
            //use axios to make api calls
            axios.get(`https://rickandmortyapi.com/api/character`).then(
                res=>{
                    console.log(res.data.results);
                    //What do i do with this data?
                    //store in state
                    setCharacters(res.data.results);
                }
            ).catch(err=>console.log(err))

        }, []//Empty array required to runs only once when page loads
    ) 


  return (
    <div className='home-container'>
        <Search setCharacters={setCharacters}/>
        <h1>Main Characters</h1>
        <div className="characters-container">
            {
                // characters.map(character=><p key={character.id}>{character.name}</p>)
                characters.map(character=><CharacterCard key={character.id} character={character} />)

            }
        </div>
    </div>
  )
}

export default HomePage