import {
  GET_BARBARIAN,
  GET_CRUSADER,
  GET_DEMON_HUNTER,
  GET_MONK,
  GET_NECROMANCER,
  GET_WITCH_DOCTOR,
  GET_WIZARD,
} from './type.character'
import { getCharacterService } from '../../api'

export const getBarbarian = () => {
  const promise = getCharacterService('barbarian')
  return {
    type: GET_BARBARIAN,
    payload: promise,
  }
}

export const getCrusader = () => {
  const promise = getCharacterService('crusader')
  return {
    type: GET_CRUSADER,
    payload: promise,
  }
}

export const getDemonHunter = () => {
  const promise = getCharacterService('demon-hunter')
  return {
    type: GET_DEMON_HUNTER,
    payload: promise,
  }
}

export const getMonk = () => {
  const promise = getCharacterService('monk')
  return {
    type: GET_MONK,
    payload: promise,
  }
}

export const getNecromancer = () => {
  const promise = getCharacterService('necromancer')
  return {
    type: GET_NECROMANCER,
    payload: promise,
  }
}

export const getWitchDoctor = () => {
  const promise = getCharacterService('witch-doctor')
  return {
    type: GET_WITCH_DOCTOR,
    payload: promise,
  }
}

export const getWizard = () => {
  const promise = getCharacterService('wizard')
  return {
    type: GET_WIZARD,
    payload: promise,
  }
}
