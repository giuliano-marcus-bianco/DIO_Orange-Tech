const pokedexContent = document.getElementById(`content`)
function pokedexOl(generation) {
  return `
  <ol id="pokemonListGeneration${generation}" class="pokemons">            
  </ol>`
} 
const htmlLoadMoreButton = `
<div>
<button id="loadMore" type="button">
<img class="gotta-catch-em-all" src="assets/img/gotta-catch-em-all.png" alt="gotta catch 'em all button">
</button>
</div>`

const pokemonGenerationInformation = [
    [151, 'Generation I'],
    [100, 'Generation II'],
    [135, 'Generation III'],
    [107, 'Generation IV'],
    [156, 'Generation V'],
    [72, 'Generation VI'],
    [88, 'Generation VII'],
    [96, 'Generation VIII'],
    [105, 'Generation IX']
]

let generationIndex = 0
let limit = pokemonGenerationInformation[generationIndex][0]
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

function createPokemonGenerationH2 (generation) {
    return `
    <div class="generation">
    <h2>${pokemonGenerationInformation[generation][1]}</h2>
    <img src="assets/img/poke-gens/${generation+1}gen.jpg" alt="Generation ${generation+1}">                
    </div>
    `
}

function addMoreButton() {
    pokedexContent.innerHTML += htmlLoadMoreButton

    const loadMoreButton = document.getElementById('loadMore')

    loadMoreButton.addEventListener(`click`, () => {
        loadMoreButton.remove()
                
        limit = pokemonGenerationInformation[generationIndex][0]  
        loadMorePokemons(offset, limit) 
                
        if(generationIndex <= pokemonGenerationInformation.length -1) {
            generationIndex ++        
        }
        
        offset += limit
            
        })
        
    }

addMoreButton()

function loadMorePokemons(offset, limit) {
    pokedexContent.innerHTML += createPokemonGenerationH2(generationIndex)
    pokedexContent.innerHTML += pokedexOl(generationIndex+1)
    let pokemonList = document.getElementById(`pokemonListGeneration${generationIndex+1}`)
    
    pokeApi.getPokemons(offset, limit)
    .then((pokemons = []) => {
        const newGeneration = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newGeneration
    })
    
    .then(() => {
        if(generationIndex <= pokemonGenerationInformation.length -1) {
            addMoreButton()
        }
    })
}    

// loadMorePokemons(offset, limit)
