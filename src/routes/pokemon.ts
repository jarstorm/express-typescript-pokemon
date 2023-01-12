import express from 'express'
import * as pokemonServices from '../services/pokemonServices'
import toNewPokemonEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(pokemonServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = pokemonServices.findById(+req.params.id)

  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newPokemonEntry = toNewPokemonEntry(req.body)

    const addedDiaryEntry = pokemonServices.addPokemon(newPokemonEntry)

    res.json(addedDiaryEntry)
  } catch (e) {
    res.status(400).send(e.message)
  }
})

export default router
