import { Grid, GridItem, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchData } from "../utils/fetchData"

export const Generation = () => {

    const [generation, setGeneration] = useState([])

    useEffect(() => {
        const fetchGenerationData = async () => {
            const generationData = await fetchData('https://pokeapi.co/api/v2/generation')
            setGeneration(generationData)
        }
        fetchGenerationData()
    }, [])
    
  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={6}>
        {generation.map((item, index) => (
            <GridItem key={item.name} border='1px' borderRadius="xl" borderColor='gray.200' p="10px" _hover={{ boxShadow: "md" }}>
                <Link to={`/generation/${index + 1}`}>
                    <img src={`src/assets/generation/generation_${index + 1}.png`} alt={item.name} />
                    <Heading textAlign="center" as='h3' size='md'>Generation {index + 1 }</Heading>
                </Link>
            </GridItem>
        ))}
    </Grid>
  )
}
