import pokemonCardTpl from '../templates/pokemon-card.hbs';

fetch('https://pokeapi.co/api/v2/pokemon/2')
  .then((response) => {
    return response.json();
  })
  .then((pokemon) => {
    console.log(pokemon);
    const markup = pokemonCardTpl(pokemon);
    console.log(markup);
  })
  .catch((error) => {
    console.log(error);
  });
