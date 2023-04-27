import React from 'react'
import "./Episodes.css"
import axios from 'axios'
import CharacterCard from '../../Components/CharacterCard/CharacterCard';


function Episodes() {

  //https://rickandmortyapi.com/api/episode

  //https://rickandmortyapi.com/api/episode/28

  const [options, setOptions] = React.useState([]);
  const [selectedOption, setSelectedOption] = React.useState(1);
  const [selectedEpisode, setSelectedEpisode] = React.useState('');
  const [characterList, setCharacterList] = React.useState([]);

  React.useEffect(
    ()=>{
      console.log("page loaded")
      //call api to get the number of episode
      axios.get('https://rickandmortyapi.com/api/episode')
      .then(
        res=>
        {
          console.log(res.data.info.count)
        //create an array with the numbers from 1 to this count
          const newOptions = []
          for (let i = 1; i <= res.data.info.count; i++){
            newOptions.push (i)
          }
          console.log(newOptions)
          //store in state
          setOptions (newOptions)
        }
        ).catch(err=>console.log(err))
    }, []
  )

  //useEffect to run when option changes
  //Runs anytime the dependency Array changes
  React.useEffect (
    ()=>{
      console.log('you selected ', selectedOption);
      //make api call to get data for this episode
      //https://rickandmortyapi.com/api/episode/28

      const fetchEpisodeData = async ()=>{
        try{
            //make api call and wait for result
            const res = await axios.get(`https://rickandmortyapi.com/api/episode/${selectedOption}`)
            console.log(res.data);
            //store in state
            setSelectedEpisode (res.data); 

            //Need to make multiple api calls to get 
            //data for each character in the episode
            //the endpoints are in selectedEpisode.characters

            const episodeCharacters = await Promise.all(
              res.data.characters.map(url => {
                return axios.get(url).then(res => res.data)
              })
            )
            console.log("episode characters are:");
            console.log(episodeCharacters);
            setCharacterList(episodeCharacters);
            
        }catch(err){

        }

      }
      // async function fetchEpisodeData ()
      //call the function
      fetchEpisodeData ();
      // axios.get(`https://rickandmortyapi.com/api/episode/${selectedOption}`)
      // .then(
      //   res=>{
      //     console.log(res);
      //   }
      // ).catch(err=>console.log(err))
    }, [selectedOption]  //Dependency Array
  )

  //function to handle selecting episode
  const handleSelectChange = (e) =>{
    console.log(e.target.value);
    //store in state
    setSelectedOption (e.target.value);
  }

  return (
    <div className='episodes-container'>
      <div>
        <label htmlFor="">Select an episode:</label>
        <select name="" id="" onChange={handleSelectChange}>
          {
          options.map(num=><option key={num} value={num}>{`Episode ${num}`}</option>)
          }
        </select>
      </div>
      <div>
        <div className="episode-info">
          <p>Episode Name: {selectedEpisode?.name}</p>
          <p>Air Date: {selectedEpisode?.air_date}</p>
        </div>
        <div className="character-container">
          {
            characterList.map(character=><CharacterCard key={character.id} character={character} />)
          }
        </div>
      </div>
    
    </div>
  )
}

export default Episodes