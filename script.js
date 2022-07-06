import {pokemonArray} from './data/pokemon.js'
const cardContainer = document.querySelector(".card-container")
const searchBarText = document.querySelector("#search-bar")
const searchBarButton = document.querySelector("#search-button");
const resultNumberDropdown = document.querySelector("#results-dropdown");

function showNoOfResults(number) {
    for(let i=0; i<number; i++) {
        if (pokemon.types[1] !== undefined) {
          cardContainer.innerHTML += `<card class="card">
        <img src="${pokemon.sprite}" alt="" class="card__image">
        <div class="card__content">
          <h3 class="card__heading">${pokemon.name}</h3>
          <p class="card__text"> ${pokemon.name} (#${pokemon.id}) is a ${pokemon.types[0]} & ${pokemon.types[1]} type pokemon</p>
        </div>
      </card>`;
        } else {
          cardContainer.innerHTML += `<card class="card">
        <img src="${pokemon.sprite}" alt="" class="card__image">
        <div class="card__content">
          <h3 class="card__heading">${pokemon.name}</h3>
          <p class="card__text"> ${pokemon.name} (#${pokemon.id}) is a ${pokemon.types[0]} type pokemon</p>
        </div>
      </card>`;
        }
    }
}

pokemonArray.forEach(pokemon => {
    pokemon.name = pokemon.name[0].toUpperCase() + pokemon.name.substring(1)
})

const handleCardRender = (event) => {
  pokemonArray.forEach((pokemon) => {
    if (pokemon.types[1] !== undefined) {
      cardContainer.innerHTML += `<card class="card">
        <img src="${pokemon.sprite}" alt="" class="card__image">
        <div class="card__content">
          <h3 class="card__heading">${pokemon.name}</h3>
          <p class="card__text"> ${pokemon.name} (#${pokemon.id}) is a ${pokemon.types[0]} & ${pokemon.types[1]} type pokemon</p>
        </div>
      </card>`;
    } else {
      cardContainer.innerHTML += `<card class="card">
        <img src="${pokemon.sprite}" alt="" class="card__image">
        <div class="card__content">
          <h3 class="card__heading">${pokemon.name}</h3>
          <p class="card__text"> ${pokemon.name} (#${pokemon.id}) is a ${pokemon.types[0]} type pokemon</p>
        </div>
      </card>`;
    }
  });
};

const handleSearch = (event) => {
    console.log(searchBarText.value)
    pokemonArray.forEach(pokemon => {
        if (searchBarText.value.toLowerCase() == pokemon.name.toLowerCase()) {
          if (pokemon.types[1] !== undefined) {
            cardContainer.innerHTML = `<card class="card">
        <img src="${pokemon.sprite}" alt="" class="card__image">
        <div class="card__content">
          <h3 class="card__heading">${pokemon.name}</h3>
          <p class="card__text"> ${pokemon.name} (#${pokemon.id}) is a ${pokemon.types[0]} & ${pokemon.types[1]} type pokemon</p>
        </div>
      </card>`;
          } else {
            cardContainer.innerHTML = `<card class="card">
        <img src="${pokemon.sprite}" alt="" class="card__image">
        <div class="card__content">
          <h3 class="card__heading">${pokemon.name}</h3>
          <p class="card__text"> ${pokemon.name} (#${pokemon.id}) is a ${pokemon.types[0]} type pokemon</p>
        </div>
      </card>`;
          }
        }
    })
}

const handleResultNumber = (event) => {
    showNoOfResults(resultNumberDropdown.value)
}


handleCardRender()
searchBarButton.addEventListener("click", handleSearch)
resultNumberDropdown.addEventListener("click", handleResultNumber)
