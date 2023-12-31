import { getPokemons } from "../services/getPokemones";
import printPokemons from "./printPokemons";

const validarPokemon = (selection, container) => {
    selection.forEach(pokemon => {
        pokemon.addEventListener('click', async () => {

            const namePokemon = pokemon.getAttribute('id');
            const data = await getPokemons();
            const dataPokemons = data.find(pokemons => pokemons.name === namePokemon);
            const tipo = validarTipo(dataPokemons.name);
            printPokemons(container, dataPokemons, tipo);

        })

    });
}

export const validarFiltro = async (form, container) => {

    const pokemon = [];
    const childrenForm = Array.from(form.children);
    const dataInput = childrenForm.filter((item) => item.localName === 'input');
    dataInput.forEach((item) => {
        pokemon.push(item.value);
    });
    const namePokemon = pokemon[pokemon.length - 1];
    const data = await getPokemons();
    const dataPokemons = data.find(pokemons => pokemons.name === namePokemon);
    printPokemons(container, dataPokemons, 'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/share/1f525.jpg');
}

const validarTipo = (name) => {
    const tipo = "https://images.emojiterra.com/google/noto-emoji/unicode-15/color/share/1f525.jpg";
    const tipoBulbasaur = "https://images.emojiterra.com/google/android-12l/512px/1f331.png";
    const tipoMetapod = "https://images.emojiterra.com/google/android-10/512px/1f41b.png";

    if (name === "bulbasaur") {
        return tipoBulbasaur;
    } else if (name === "metapod") {
        return tipoMetapod;
    } else {
        tipo;
    }

}

export default validarPokemon;