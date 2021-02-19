import styled from 'styled-components';

const PokeInfos = styled.div`
     background-color: black;
     flex: 1;
`

function HeightAndWeight() {
     return(
          <table>
               <tr>
                   <th>Weight</th>
                   <th>Height</th> 
               </tr>

               <tr>
                    <td>Pokémons Weigth</td>
                    <td>Pokémons Height</td>
               </tr>
          </table>
     )
}


function Pokeinfo() {
     return(
          <>
               <HeightAndWeight />
          </>
     )
}

export default PokeInfos; 