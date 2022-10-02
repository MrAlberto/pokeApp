export const fetchData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data.results
}

export const fetchDataPokemon = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}