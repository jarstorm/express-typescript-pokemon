import { PokemonEntry, NewPokemonEntry, NonSensitiveInfoPokemonEntry } from '../types'
import pokemonData from '../data/pokemon.json'

const pokemons: PokemonEntry[] = pokemonData as PokemonEntry[]

export const getEntries = (): PokemonEntry[] => pokemons

export const findById = (id: number): NonSensitiveInfoPokemonEntry | undefined => {
  const entry = pokemons.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...restOfPokemon } = entry
    return restOfPokemon
  }

  return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoPokemonEntry[] => {
  return pokemons.map(({ id, date, name, type }) => {
    return {
      id,
      date,
      name,
      type
    }
  })
}

export const addPokemon = (newPokemonEntry: NewPokemonEntry): PokemonEntry => {
  const newPokemon = {
    id: Math.max(...pokemons.map(d => d.id)) + 1,
    ...newPokemonEntry
  }

  pokemons.push(newPokemon)
  return newPokemon
}
