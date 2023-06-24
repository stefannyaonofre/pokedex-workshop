import "../styles/style.scss"
import printPokemons from "./UI/printPokemons";
import validarPokemon from "./UI/validarPokemons";
import { getPokemons } from "./services/getPokemones.js"

const main = document.getElementById('main');

// const pokemonesPrincipales = ['bulbasaur', 'metapod', 'charmander', 'charizard'];

document.addEventListener('DOMContentLoaded', () => {

    const selectionPokemons = document.querySelectorAll('.select');
    validarPokemon(selectionPokemons, main);
})

