import { Grid, GridItem, Heading, Image } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

export const PokemonCard = ({pokemon}) => {
    console.log(pokemon);
  return (
      <Grid templateColumns={{xl: 'repeat(6, 1fr)', md: 'repeat(4, 1fr)', sm: 'repeat(2, 1fr)'}} gap={6}>
        {
            pokemon.map(({name, id, types}, index) => {
            return(
                <GridItem key={name} borderRadius="xl" p="10px" _hover={{ boxShadow: "md" }} className={`type_${types[0].type.name}`}>
                    <Link to={`/${name}`} key={id}>
                        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} loading="lazy" alt={name} />
                        <Heading textAlign="center" textTransform="capitalize" as="h5" size="sm">{name}</Heading>
                        <Heading textAlign="center" textTransform="capitalize" as="h5" size="sm"># {id}</Heading>
                    </Link>
                </GridItem>
            )
            })
        }
      </Grid>
  )
}
