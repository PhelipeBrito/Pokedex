  import React from 'react';
  import PokemonList from '../../src/components/PokemonList';
  import PokedexBlock from '../../src/components/PokedexBlock';
  import PokeInfos from '../../src/components/PokeInfos';
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
              

              <PokeInfos>
                <img  src={`${pokemon.sprites.front_default}`} alt="Imagem de um pokémon" />
                <img  src={`${pokemon.sprites.front_shiny}`} alt="Imagem de um pokémon" />

                <InfosBlock>
                  <div>
                    <h1>
                    Name
                    </h1>
                    
                    <p>{`${pokemon.name}`}</p>
                  </div>

                  <div>
                    <h1>
                      Type
                    </h1>

                    <ul>
                  {pokemon.types.map((typeBlock) => {
                    return(
                      <li>
                        {typeBlock.type.name}
                      </li>
                    )
                  })}
                  </ul>
                  </div>
                </InfosBlock>

                <InfosBlock>
                  <h1>
                    Abilities
                  </h1>
                  <ul>
                  {pokemon.abilities.map((abilityBlock) => {
                    return(
                      <li>
                        {abilityBlock.ability.name}
                      </li>
                    )
                  })}
                  </ul>
                </InfosBlock>

                
                <InfosBlock>
                  <h1>
                    Held Item
                  </h1>
                  <ul>
                  {pokemon.held_items.map((itemBlock) => {
                    return(
                      <li>
                        {itemBlock.item.name}
                      </li>
                    )
                  })}
                  </ul>
                </InfosBlock>

                              
                <InfosBlock>
                  <div>
                    <h1>
                      Height
                    </h1>
                    <p>{`${pokemon.height}`}</p>
                  </div>

                  <div>
                    <h1>
                      Weight
                    </h1>
                    <p>{`${pokemon.weight}`}</p>
                  </div>
                </InfosBlock>


              </PokeInfos>         
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
  