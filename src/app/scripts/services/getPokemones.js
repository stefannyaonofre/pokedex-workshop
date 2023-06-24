import axios from "axios";
import URL_API from "./data";

const listPokemons = [];

export const getPokemons = async () => {
    try {
      const response = await axios.get(URL_API);
      if (response.status === 200) {
          for (let i = 0; i < response.data.results.length; i++) {
              const pokemon = response.data.results[i];
              try {
                  const resp = await axios.get(pokemon.url);
                  
                  const newPokemon = {
                    name: resp.data.name,
                    image: resp.data.sprites.front_default,
                    height: resp.data.height,
                    experience: resp.data.base_experience,
                    specie: resp.data.species.name,
                    weight: resp.data.weight,
                    abilities: resp.data.abilities[0].ability.name,
                  };
                  listPokemons.push(newPokemon);
                  if (response.data.results.length === i + 1) {
                    return listPokemons;
                  }
                } catch (error) {
                  reject(error);
                  return [];
                }
          }
      }
    } catch (error) {
      console.log(error);
    }
  };