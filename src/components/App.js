import {useState} from 'react'
import Search from './Search'
import PokemonCard from './PokemonCard'
import Team from './Team'
function App() {
  const [pokemon, setPokemon] = useState(null)
  const [renderTeam, setRenderTeam] = useState(null)

  const handleGet = (search) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then(res => res.json())
    .then(pokemon => setPokemon(pokemon))
    
  }

  const handlePost = (pokemon) => {
    fetch('http://localhost:4000/team',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pokemon)
    })
    .then(() => {
      setRenderTeam(true)
      setPokemon(null)
    })
  }

  const handleTeamRender = () => {
    setRenderTeam(true)
    setPokemon(null)
  }

  const handleRenderSearch = () => {
    setRenderTeam(null)
  }
  return (
    <div className="App">
    
      {renderTeam? <Team handleRenderSearch={handleRenderSearch}/> :
      <div>
        <button onClick={handleTeamRender}>Go to team</button>
        <Search handleGet={handleGet}/>
      </div>
    }
    {pokemon?<PokemonCard pokemon={pokemon} handlePost={handlePost}/>: null}
    </div>
  );
}

export default App;
///         app
// Search PokemonCard  Team