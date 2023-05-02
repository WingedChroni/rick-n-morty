import React from 'react'
import "./Search.css"
import axios from 'axios'

function Search({setCharacters}) {

    //need state to store user input
    const [query, setQuery] = React.useState("")

    const handleSearch = (e) => {
        //stop default form action
        e.preventDefault();
        console.log("query is");
        console.log(query);
        //make api call to get characters that match
        axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`).then(
            res=>{
                console.log("search result")
                console.log(res.data.results)
                //change what is in characters
                setCharacters (res.data.results)
            }
        ).catch(err=>console.log(err))
    }

  return (
    <form action="" className='search-container' onSubmit={handleSearch}>
        <input type="text" 
               onChange={(e)=>setQuery(e.target.value)}
               placeholder='Search all character'/>


    </form>
  )
}

export default Search