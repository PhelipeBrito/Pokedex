import styled from 'styled-components';

const List = styled.ul`
  overflow-y: scroll;
  width: 12%;
`

export default function PokemonList({pokemons}) {
    return(
        <List>
          {pokemons.map( (pokemon) => {
            return(
              <li>
                {pokemon.pokemon_species.name}
              </li>
            )
          })}
        </List>
    )
}