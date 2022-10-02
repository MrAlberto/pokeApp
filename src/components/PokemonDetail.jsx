import { Badge, Flex, Grid, GridItem, Heading, Progress } from '@chakra-ui/react'
import { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const PokemonDetail = () => {
    const {pokemon} = useParams()

    const [pokeData, setPokeData] = useState([])
    
    const getPoke = async () => {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const data = await result.json()
        setPokeData((c) => [...c, data]);
    }

    useEffect(() => {
        getPoke()
    }, [pokemon])
    
console.log(pokeData);
  return (
    <Grid templateRows={{xl: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)'}} templateColumns={{xl: 'repeat(3, 1fr)',md: 'repeat(3, 1fr)', sm: 'repeat(1, 1fr)'}} gap={4}>
        {
            pokeData.map(({name, id, types, stats}) => {
                return(
                    <Fragment key={id}>
                        <GridItem rowSpan={2} colSpan={1}>
                            <div>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} width="350px" alt="" />
                            </div>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Heading as="h2" textTransform="capitalize" mb={4}>{name} 
                            {
                                types.map(type => {
                                    return(
                                    <Badge key={type.type.name} className={`type_${type.type.name}`} ml="3" textTransform="capitalize"> {type.type.name}</Badge>
                                    )
                                })
                            }
                            </Heading>
                            {
                                stats.map(stat => {
                                    return(
                                        <Fragment key={stat.stat.name}>
                                            <div>{stat.stat.name} - {stat.base_stat}</div>
                                            <Progress value={stat.base_stat} className={`type_${types[0].type.name}_progress`} size='sm' width="90%" mb="2"></Progress>
                                        </Fragment>
                                    )
                                })
                            }
                        </GridItem>
                    </Fragment>
                )
            })
        }
    </Grid>
  )
}
