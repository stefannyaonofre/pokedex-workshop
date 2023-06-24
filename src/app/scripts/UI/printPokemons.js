const printPokemons = (container, dataPokemons, tipo) =>{
    container.innerHTML = `
    <section class="section1">
            <article class="article1">
                <figure>
                    <img src="${tipo}" alt="type">
                </figure>
                <h2>${dataPokemons.name}</h2>
            </article>
            <figure class="imgPokedex">
                <img src="${dataPokemons.image}" alt="Squirtle">
            </figure>
        </section>
        <section class="section2">
            <article class="article2">
                <div class="div__lista">
                    <h4>Altura</h4>
                    <span>${dataPokemons.height}</span>
                </div>
                <div class="div__lista">
                    <h4>Experiencia</h4>
                    <span>${dataPokemons.experience}</span>
                </div>
                <div class="div__lista">
                    <h4>Especie</h4>
                    <span>${dataPokemons.specie}</span>
                </div>
            </article>
            <article class="article2">
                <div class="div__lista">
                    <h4>Peso</h4>
                    <span>${dataPokemons.weight}</span>
                </div>
                <div class="div__lista">
                    <h4>Habilidad</h4>
                    <span>${dataPokemons.abilities}</span>
                </div>
                <div class="div__lista">
                    <h4>Peso</h4>
                    <span>${dataPokemons.weight} kg</span>
                </div>
            </article>
        </section>
    `
}

export default printPokemons;