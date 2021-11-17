
function PokemonCard({pokemon, handlePost}) {
  console.log(pokemon)
    return (
      <div className="Content">
        <h1>{pokemon.id} : {pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <img src={pokemon.sprites.back_default} alt={pokemon.name} />
        <h3>Type</h3>
        {pokemon.types.map(item => <li>{item.type.name}</li>)}
        <div>
          <h2>STATS</h2>
          <ul>
            {pokemon.stats.map(item => <li>{item.stat.name} : {item.base_stat}</li>)}
          </ul>
        </div>
        <button onClick={() => handlePost(pokemon)}>Capture</button>
      </div>
    );
  }
  
  export default PokemonCard;