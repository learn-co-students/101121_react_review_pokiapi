import {useState} from 'react'
function Search({handleGet}) {
  const [pokemonSearch, setPokemonSearch] = useState('')

  const handleChange = (e) => {
    setPokemonSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleGet(pokemonSearch)

  }

    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <input type="text" value={pokemonSearch} onChange={handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
  
  export default Search;