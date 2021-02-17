  import React from 'react';
  import PokemonList from '../../components/PokemonList';
  import PokedexBlock from '../../components/PokedexBlock';
  import PokeInfos from '../../components/PokeInfos';

  export default function Pokemon({pokemon, pokemons}) {
      console.log(pokemon);
      return (
        <PokedexBlock>
            <PokemonList pokemons={pokemons}/>

            <PokeInfos>
              <img  src={`${pokemon.sprites.front_default}`} alt="Imagem de um pokémon" />
              <img  src={`${pokemon.sprites.front_shiny}`} alt="Imagem de um pokémon" />
              <h1>
              {`${pokemon.name}`}
              </h1>
            </PokeInfos>         
        </PokedexBlock>
      )
  }


export async function getStaticProps({ params }) {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
  .then((respostaDoServer) => {
    if(respostaDoServer.ok) {
      return respostaDoServer.json()
    }
  })
  .then((respostaEmObjeto) => respostaEmObjeto.pokemon_entries)

  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
  .then((respostaDoServer) => {
    if(respostaDoServer.ok) {
      return respostaDoServer.json()
    }
  })
  .then((respostaEmObjeto) => respostaEmObjeto);

  return {
    props: {
      pokemons,
      pokemon
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: '1',
        },
      },
      {
        params: {
          id: '20',
        },
      },
    ],
    fallback: false,
  };
}
  