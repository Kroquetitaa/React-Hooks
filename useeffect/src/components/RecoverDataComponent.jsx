import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { getPokemonData } from '../api/apiCalls';




export const RecoverDataComponent = () => {

  const [pokemon, setPokemon] = useState({
    name: '',
    img: ''
  });

  const [filter, setFilter] = useState('');
  const [debounceFilter] = useDebounce(filter, 500);

  useEffect(() => {
    getPokemonData(filter).then((pokemon) => setPokemon(pokemon));
  }, [debounceFilter]);


  const handleChangeFilter = (e) => {

    console.log(e.target.value);
    const StringtoLower = e.target.value.toLowerCase().trim();
    setFilter(StringtoLower);
  }

  return (
    <>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.img} alt={pokemon.name} />

      <input type="text" value={filter} onChange={(e) => handleChangeFilter(e)} />
    </>
  )
}