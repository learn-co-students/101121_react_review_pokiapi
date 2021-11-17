import {useState, useEffect} from 'react'
function Team({handleRenderSearch}) {
  const [team, setTeam] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/team')
    .then(res => res.json())
    .then(team => setTeam(team))
  },[])
  
    return (
      <div className="Team">
        <button onClick={handleRenderSearch}>Back to Search </button>
       {team.map(pokemon => <div> <h3>{pokemon.name}</h3> <img src={pokemon.sprites.front_default} alt={pokemon.name}/></div>)}
      </div>
    );
  }
  
  export default Team;