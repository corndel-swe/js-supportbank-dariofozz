export async function getPokemonList() {

const response = await fetch('https://pokeapi.co/api/v2/pokemon')
const data = await response.json()
console.log (data)
  // TODO

  const names = data.results.map(pokemon => pokemon.name)
  
}
