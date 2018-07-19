document.addEventListener("DOMContentLoaded", function() {

const searchBarInput = document.getElementById('pokemon-search-input');

searchBarInput.addEventListener('keyup', liveSearch);
})

class Pokemon{

  constructor(name, frontImage, rearImage){
    this.name = name;
    this.frontImage = frontImage;
    this.rearImage = rearImage;
  };

  render(){ return `
        <div class="pokemon-frame">
            <h1 class="center-text">${this.name}</h1>
            <div style="width:239px;margin:auto">
              <div style="width:96px;margin:auto">
                <img src="${this.frontImage}">
              </div>
            </div>
            <p style="padding:10px;" class="center-text flip-image" data-pokename="${this.name}" data-action="flip-image">flip card</p>
          </div>
            `
  }

  flip(event){
    let source = event.target.parentElement.querySelector('img').src;
    event.target.parentElement.querySelector('img').src = source === `${this.frontImage}` ? `${this.rearImage}` : `${this.frontImage}`;
  }


}

function pokemonSearch(string){
  const pokemonSearchResults = []

  data["pokemons"].forEach(function(el){
     if(el.name.includes(string)){
       const pokemon = new Pokemon (el.name, el.sprites.front, el.sprites.back);
       pokemonSearchResults.push(pokemon);
     }
  });
  return pokemonSearchResults;
}

function createAndAddPokemonToParentContainer(pokemonSearchResults){
const pokemonParentContainer = document.getElementById('pokemon-container');
while (pokemonParentContainer.hasChildNodes()) {
    pokemonParentContainer.removeChild(pokemonParentContainer.lastChild);
};
  pokemonSearchResults.forEach(function(el){
    const pokemonCard = document.createElement('div')
    pokemonCard.className = 'pokemon-container';
    pokemonCard.innerHTML = el.render();

      pokemonParentContainer.appendChild(pokemonCard);
      pokemonCard.querySelector('p').addEventListener('click', el.flip.bind(el))
  });
}

function liveSearch(){
  const searchBarInput = document.getElementById('pokemon-search-input');
  let pokemonSearchResults = pokemonSearch(searchBarInput.value);
  createAndAddPokemonToParentContainer(pokemonSearchResults);
}
