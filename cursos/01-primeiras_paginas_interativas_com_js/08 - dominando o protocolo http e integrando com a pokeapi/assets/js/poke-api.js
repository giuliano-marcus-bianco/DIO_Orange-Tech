

const pokeApi = {}

function convertPokeApiDetailToPoekemonModel(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.name = pokeDetail.name
    pokemon.id = pokeDetail.id

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type1] = types

    pokemon.types = types
    pokemon.type = type1

    pokemon.sprite = pokeDetail.sprites.other['official-artwork'].front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPoekemonModel)

}

pokeApi.getPokemons = (offset, limit) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        
        .catch((error) => console.error(error))
}