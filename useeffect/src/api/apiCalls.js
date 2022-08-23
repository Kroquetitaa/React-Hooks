const URL = 'https://pokeapi.co/api/v2/pokemon/'

export const getPokemonData = async (name) => {
  const data = await fetch(`${URL}${name}`);
  const dataJson = await data.json();
  return {
    name: dataJson.name,
    img: dataJson.sprites.front_shiny
  }
}