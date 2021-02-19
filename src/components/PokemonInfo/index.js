import styled from 'styled-components';

const Pokemon = styled.div`
     background-color: black;
     flex: 1;
`

Pokemon.TableRow = styled.tr`
     color: #ffffff;
`

function InfoTable({ height, weight, abilities, heldItems}) {
     return(
          <table>
               {/*Pokémon's height and weight*/}
               <Pokemon.TableRow>
                   <th>Weight</th>
                   <th>Height</th> 
               </Pokemon.TableRow>

               <Pokemon.TableRow>
                    <td>{weight}</td>
                    <td>{height}</td>
               </Pokemon.TableRow>

               {/* Pokémon's abilities*/}
               <Pokemon.TableRow>
                    <th>Abilites</th>
               </Pokemon.TableRow>
               <Pokemon.TableRow>
                    {abilities.map((abilityBlock) => {
                    return(
                         <td>
                         {abilityBlock.ability.name}
                         </td>
                    )
                    })}
               </Pokemon.TableRow>
               
               {/* Pokémon's held items */}
               <Pokemon.TableRow>
                    <th>HeldItems</th>
               </Pokemon.TableRow>
               <Pokemon.TableRow>
                    {heldItems.map((itemBlock) => {
                    return(
                         <td>
                         {itemBlock.item.name}
                         </td>
                    )
                    })}               
               </Pokemon.TableRow>
          </table>
     )
}

function PokemonInfo({pokemon}) {
     return(
          <Pokemon>
               <InfoTable 
                    height={pokemon.height}
                    weight={pokemon.weight}
                    abilities={pokemon.abilities}
                    heldItems={pokemon.held_items}
               />
          </Pokemon>
     )
}

export default PokemonInfo; 