import { PokemonType } from './enums'

export interface PokemonEntry {
  id: number
  date: string
  name: string
  type: PokemonType
  comment: string
}

export type NonSensitiveInfoPokemonEntry = Omit<PokemonEntry, 'comment'>
export type NewPokemonEntry = Omit<PokemonEntry, 'id'>
