import "../styles/style.scss"
import printPokemons from "./UI/printPokemons";
import validarPokemon, { validarFiltro } from "./UI/validarPokemons";
import { getPokemons } from "./services/getPokemones.js"

const main = document.getElementById('main');
const formFiltro = document.getElementById('form');

// const pokemonesPrincipales = ['bulbasaur', 'metapod', 'charmander', 'charizard'];

formFiltro.addEventListener('submit', (e) => {
    e.preventDefault();
    validarFiltro(formFiltro, main);

})

document.addEventListener('DOMContentLoaded', () => {

    const selectionPokemons = document.querySelectorAll('.select');
    validarPokemon(selectionPokemons, main);
})

