import styled from 'styled-components';
import Link from 'next/link'

const List = styled.ul`
  overflow-y: scroll;
  width: 12%;

  background-color: #DADADA;
`

List.Topic = styled.a`
    font-family: 'Rosario', sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;

    padding: 3px;

    &:hover {
      cursor: pointer;
      background-color: #555555;
    }
    
`

export default function PokemonList({pokemons}) {
    return(
        <List>
          {pokemons.map( (pokemon) => {
            return(
              <li>
                <Link href={`/pokemon/${pokemon.entry_number}`}>
                  <List.Topic>{pokemon.pokemon_species.name}</List.Topic>
                </Link>        
              </li>
            )
          })}
        </List>
    )
}