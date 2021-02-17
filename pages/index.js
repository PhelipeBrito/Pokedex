import React from 'react'

export async function getStaticProps() {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then((respostaDoServer) => {
      if(respostaDoServer.ok) {
        return respostaDoServer.json()
      }
    })
    .then((respostaEmObjeto) => respostaEmObjeto);
    

    return {
      props: {
        pokemons
      }
    }  
}



export default function Home(props) {
  const [infoState, setInfoState] = React.useState(0)
  const { pokemons } = props; 
  const infos = [
    {id:1, name: 'one'},
    {id:2, name: 'two'},
    {id:3, name: 'three'}
  ]

  function nextClick() {
    setInfoState(pokemons.length !== infoState ? infoState + 1 : infoState)
  }

  function backClick() {
    setInfoState(1 !== infoState ? infoState - 1 : infoState)
  }
  return (
    <>
    {/* {pokemons.map((pokemon) => {
      if( infoState === pokemon.entry_number){
      return(
        <>
          <img href={pokemon.pokemon_species.url}/>
          <p>{pokemon.entry_number}</p>
          <p>{pokemon.pokemon_species.name}</p>
          <p>{pokemon.pokemon_species.url}</p>
        </>
      )}
    })} */}

    <button
      onClick={() => backClick()}
    >
      Back
    </button>    

    <button
      onClick={() => nextClick()}
    >
      Next
    </button>

    {<pre>
      {JSON.stringify(pokemons, null, 4)}
    </pre>}
    </>
    
  )
}
