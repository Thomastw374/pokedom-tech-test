import {pokemonArray} from './data/pokemon.js'
const cardContainer = document.querySelector(".card-container")
// pokemonArray is an array of objects.

const handleCardRender = (event) => {
    for (i=0; i<pokemonArray.length; i++) {
        cardContainer.innerHTML += `<card class="card">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt="" class="card__image">
        <div class="card__content">
          <h3 class="card__heading">Ivysaur</h3>
          <p class="card__text"> ${pokemon.name} (${pokemon.id}) is a ${pokemon.types[0]} & ${pokemon.types[1]} type pokemon</p>
        </div>
      </card>`;
    }
}

document.addEventListener("load", handleCardRender)

