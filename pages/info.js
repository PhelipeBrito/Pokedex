
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
              </Pokeinfos>