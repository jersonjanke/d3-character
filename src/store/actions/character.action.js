import {
  GET_BARBARIAN,
  GET_BARBARIAN_IMAGE,
  GET_CRUSADER,
  GET_CRUSADER_IMAGE,
  GET_DEMON_HUNTER,
  GET_DEMON_HUNTER_IMAGE,
  GET_MONK,
  GET_MONK_IMAGE,
  GET_NECROMANCER,
  GET_NECROMANCER_IMAGE,
  GET_WITCH_DOCTOR,
  GET_WITCH_DOCTOR_IMAGE,
  GET_WIZARD,
  GET_WIZARD_IMAGE,
} from './type.character'
import { getCharacterService } from '../../api'

const BASE_URL = 'https://blzmedia-a.akamaihd.net/d3/icons/portraits/64'

export const getCharacterImage = (character) => {
  return `${BASE_URL}/${character}.png`
}

export const getBarbarian = () => {
  const promise = getCharacterService('barbarian')
  return [
    (dispatch) => {
      promise.then((response) => {
        dispatch({ type: GET_BARBARIAN, payload: response.data })
        dispatch({
          type: GET_BARBARIAN_IMAGE,
          payload: getCharacterImage(response.data.icon),
        })
      })
    },
  ]
}

export const getCrusader = () => {
  const promise = getCharacterService('crusader')
  return [
    (dispatch) => {
      promise.then((response) => {
        dispatch({ type: GET_CRUSADER, payload: response.data })
        dispatch({
          type: GET_CRUSADER_IMAGE,
          payload: getCharacterImage(response.data.icon),
        })
      })
    },
  ]
}

export const getDemonHunter = () => {
  const promise = getCharacterService('demon-hunter')
  return [
    (dispatch) => {
      promise.then((response) => {
        dispatch({ type: GET_DEMON_HUNTER, payload: response.data })
        dispatch({
          type: GET_DEMON_HUNTER_IMAGE,
          payload: getCharacterImage(response.data.icon),
        })
      })
    },
  ]
}

export const getMonk = () => {
  const promise = getCharacterService('monk')
  return [
    (dispatch) => {
      promise.then((response) => {
        dispatch({ type: GET_MONK, payload: response.data })
        dispatch({
          type: GET_MONK_IMAGE,
          payload: getCharacterImage(response.data.icon),
        })
      })
    },
  ]
}

export const getNecromancer = () => {
  const promise = getCharacterService('necromancer')
  return [
    (dispatch) => {
      promise.then((response) => {
        dispatch({ type: GET_NECROMANCER, payload: response.data })
        dispatch({
          type: GET_NECROMANCER_IMAGE,
          payload: getCharacterImage(response.data.icon),
        })
      })
    },
  ]
}

export const getWitchDoctor = () => {
  const promise = getCharacterService('witch-doctor')
  return [
    (dispatch) => {
      promise.then((response) => {
        dispatch({ type: GET_WITCH_DOCTOR, payload: response.data })
        dispatch({
          type: GET_WITCH_DOCTOR_IMAGE,
          payload: getCharacterImage(response.data.icon),
        })
      })
    },
  ]
}

export const getWizard = () => {
  const promise = getCharacterService('wizard')
  return [
    (dispatch) => {
      promise.then((response) => {
        dispatch({ type: GET_WIZARD, payload: response.data })
        dispatch({
          type: GET_WIZARD_IMAGE,
          payload: getCharacterImage(response.data.icon),
        })
      })
    },
  ]
}
