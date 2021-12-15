import Pokemon from "./Pokemon";

export default class Pokedex{
    pokemons : Pokemon[];
    constructor(){
        this.pokemons = [];
    }
    addPokemon(pokemon: Pokemon){
        this.pokemons.push(pokemon);
    }
    getPokemon(id: number){
        return this.pokemons.find((pokemon: Pokemon) => pokemon.getId === id);
    }
    get getAllPokemons(){
        return this.pokemons;
    }
}