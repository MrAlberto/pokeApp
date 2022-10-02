import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PokemonCard } from './PokemonCard'

export const Pokemon = () => {

    const {id} = useParams()

    const [pokemon, setPokemon] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchPokemon = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/generation/${id}`)
        const data = await response.json()
        getPokemon(data.pokemon_species)
      }

      const getPokemon = async (data) => {
        data.map(async (item) => {
          const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
          const new_data = await result.json()
          setPokemon((state) => {
            state = [...state, new_data];
            state.sort((a, b) => (a.id > b.id ? 1 : -1));
            return state;
        });
        setIsLoading(true)
        });
    };
    useEffect(() => {
      fetchPokemon()
      setIsLoading(false)
    }, [id])
    
  return (
    <>
        <PokemonCard pokemon={pokemon} />
    </>
  )
}
