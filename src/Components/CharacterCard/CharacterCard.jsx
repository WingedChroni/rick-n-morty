import React from 'react'
import "./CharacterCard.css"
import { Link } from 'react-router-dom'

function CharacterCard({character}) {
  return (
    <div className="character-card">
        {/* CharacterCard */}
        <img src={character.image} alt="" />
        <p>{character.name}</p>
        <Link to={`/details/${character.id}`}>See Details</Link>

    </div>
  )
}

export default CharacterCard