  import React from 'react';
  import PokemonList from '../../src/components/PokemonList';
  import PokedexBlock from '../../src/components/PokedexBlock';
  import PokemonInfo from '../../src/components/PokemonInfo';
  import InfosBlock from '../../src/components/InfosBlock';
  import PokedexHeader from '../../src/components/PokedexHeader';

  export default function Pokemon({pokemon, pokemons}) {
    const [infoState, setInfoState] = React.useState(0)
    const [list, listState] = React.useState(false)

    function listToggle() {
      listState(!list)
    }
  
    function nextClick() {
      setInfoState(pokemons.length !== infoState ? infoState + 1 : infoState)
    }
  
    function backClick() {
      setInfoState(1 !== infoState ? infoState - 1 : infoState)
    }

    console.log(listToggle);
      return (
        <>    
          <PokedexHeader listToggle={listToggle}/>   
          <PokedexBlock>
              {list ? <PokemonList pokemons={pokemons}/> : null}
              
              <PokemonInfo 
                pokemon={pokemon}
              />

          </PokedexBlock>
        </>
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
  