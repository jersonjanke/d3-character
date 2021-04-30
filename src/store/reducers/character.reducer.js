import {
  GET_BARBARIAN,
  GET_CRUSADER,
  GET_DEMON_HUNTER,
  GET_MONK,
  GET_NECROMANCER,
  GET_WITCH_DOCTOR,
  GET_WIZARD,
} from './../actions/type.character'
const initialState = {
  barbarian: {},
}

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BARBARIAN:
      return {
        ...state,
        barbarian: action.payload.data,
      }
    case GET_CRUSADER:
      return {
        ...state,
        crusader: action.payload.data,
      }
    case GET_DEMON_HUNTER:
      return {
        ...state,
        demonHunter: action.payload.data,
      }
    case GET_MONK:
      return {
        ...state,
        monk: action.payload.data,
      }
    case GET_NECROMANCER:
      return {
        ...state,
        necromancer: action.payload.data,
      }
    case GET_WITCH_DOCTOR:
      return {
        ...state,
        witchDoctor: action.payload.data,
      }
    case GET_WIZARD:
      return {
        ...state,
        wizard: action.payload.data,
      }

    default:
      return state
  }
}

export default characterReducer
