const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMore')
const numberOfPokemonsForGeneration = [151, 100, 135, 107, 156, 72, 88, 96, 105]
let generationIndex = 0
let limit = numberOfPokemonsForGeneration[generationIndex]
let offset = 0


function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
                <div class="top">
                    <span class="name">${pokemon.name}</span>
                    <span class="number">#${pokemon.id}</span>
                </div>

                <div class="details">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img class="sprite" src=${pokemon.sprite} alt="${pokemon.name}">

                    <img class="pokeball" src="assets/img/pokeball.png" alt="pokéball">
                </div>
                
            </li>
    `
}

function loadMorePokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit)
    .then((pokemons = []) => {
        const addPokemonGeneration = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += addPokemonGeneration
    })
}

loadMorePokemons(offset, limit)

loadMoreButton.addEventListener(`click`, () => {

    offset += limit
    generationIndex ++
    
    if (generationIndex === numberOfPokemonsForGeneration.length - 1) {
        loadMoreButton.remove()
        limit = numberOfPokemonsForGeneration[generationIndex]
    } else {
        limit = numberOfPokemonsForGeneration[generationIndex]
    }
    loadMorePokemons(offset, limit)
})
