import { NewPokemonEntry } from './types'
import { PokemonType } from './enums'

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }

  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }

  return dateFromRequest
}

const parseType = (typeFromRequest: any): PokemonType => {
  if (!isString(typeFromRequest) || !isPokemonType(typeFromRequest)) {
    throw new Error('Incorrect or missing Type')
  }

  return typeFromRequest
}

const parseName = (nameFromRequest: any): string => {
  if (!isString(nameFromRequest)) {
    throw new Error('Incorrect or missing name')
  }

  return nameFromRequest
}


const isPokemonType = (param: any): boolean => {
  return Object.values(PokemonType).includes(param)
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const toNewPokemonEntry = (object: any): NewPokemonEntry => {
  const newEntry: NewPokemonEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    type: parseType(object.type),
    name: parseName(object.name)
  }

  return newEntry
}

export default toNewPokemonEntry
