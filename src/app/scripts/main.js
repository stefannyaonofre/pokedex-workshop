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



const nextBtn = document.getElementById("next-btn");

  nextBtn.disabled = pokemones.length < resultsPerPage;

  nextBtn.addEventListener("click", () => {
    if (pokemones.length === resultsPerPage) {
      currentPage++;
      getListPokemons(currentPage);
    }
    console.log()
  });


getListPokemons();

