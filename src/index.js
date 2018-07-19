document.addEventListener("DOMContentLoaded", function() {
const searchBarInput = document.getElementById('pokemon-search-input');






searchBarInput.addEventListener('keydown', liveSearch);
})

let searchString = '';

function pokemonSearch(string){

  const pokemonSearchResults = []
// this gets pokemon that match current searchString
  data["pokemons"].forEach(function(el){
     if(el.name.includes(string)){
       pokemonSearchResults.push(el);
     }
  });
  return pokemonSearchResults;
}

function createAndAddPokemonToParentContainer(pokemonSearchResults){
  const pokemonParentContainer = document.getElementById('pokemon-container');
  pokemonSearchResults.forEach(function(el){
    const pokemonCard = document.createElement('div')
    pokemonCard.className = 'pokemon-container';
    pokemonCard.innerHTML = ` <div class="pokemon-frame">
        <h1 class="center-text">${el.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img src="${el.sprites.front}">
          </div>
        </div>
        <p style="padding:10px;" class="center-text flip-image" data-pokename="${el.name}" data-action="flip-image">flip card</p>
        </div>`
        // pokemonParentContainer.childNode.remove()
      pokemonParentContainer.appendChild(pokemonCard);
  });
}


function liveSearch(event){

  if(event.key === "Backspace"){
    searchString = searchString.slice(0, -1);
  }else if(event.code.includes('Key')){
  searchString += event.key.toLowerCase();
  }
  let pokemonSearchResults = pokemonSearch(searchString);
  createAndAddPokemonToParentContainer(pokemonSearchResults);
}
