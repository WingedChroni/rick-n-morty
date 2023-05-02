import React from 'react'
import "./CharacterDetails.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'

function CharacterDetails() {
    //I need to get the id of this character from the url

    const {characterId} = useParams()
    console.log(`how do i konw what this is ${characterId}`)
    console.log(characterId)
    
    //make state to hold api data
    const [character, setCharacter] = React.useState({})

    //https://rickandmortyapi.com/api/character/2
    //I need to get api data when the page loads
    React.useEffect (
        ()=>{
            //make api call
            axios.get(`https://rickandmortyapi.com/api/character/${characterId}`).
            then(res=>{
                console.log(res.data)
                //store in state
                setCharacter(res.data)
            }).catch(err=>console.log(err))
        },[]
    )

        //{character?.name} the question mark makes it for slow API
        //doesn't look for the data without it being loaded first
  return (
    <div className='details-container'>
        <img src={character?.image} alt="" />
        <div className="container-info">
            <p>Name: {character?.name}</p>
            <p>Gender: {character?.gender}</p>
            <p>Location: {character?.location?.name}</p>
            <p>Species: {character?.species}</p>
        </div>
        {/* CharacterDetails {character?.name} */}

    </div>
  )
}

export default CharacterDetails