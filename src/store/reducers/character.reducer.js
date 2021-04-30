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
} from './../actions/type.character'
const initialState = {
  barbarian: {},
}

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BARBARIAN:
      return {
        ...state,
        barbarian: action.payload,
      }
    case GET_BARBARIAN_IMAGE:
      return {
        ...state,
        barbarian: {
          ...state.barbarian,
          icon: action.payload,
        },
      }
    case GET_CRUSADER:
      return {
        ...state,
        crusader: action.payload,
      }
    case GET_CRUSADER_IMAGE:
      return {
        ...state,
        crusader: {
          ...state.crusader,
          icon: action.payload,
        },
      }
    case GET_DEMON_HUNTER:
      return {
        ...state,
        demonHunter: action.payload,
      }
    case GET_DEMON_HUNTER_IMAGE:
      return {
        ...state,
        demonHunter: {
          ...state.demonHunter,
          icon: action.payload,
        },
      }
    case GET_MONK:
      return {
        ...state,
        monk: action.payload,
      }
    case GET_MONK_IMAGE:
      return {
        ...state,
        monk: {
          ...state.monk,
          icon: action.payload,
        },
      }
    case GET_NECROMANCER:
      return {
        ...state,
        necromancer: action.payload,
      }
    case GET_NECROMANCER_IMAGE:
      return {
        ...state,
        necromancer: {
          ...state.necromancer,
          icon: action.payload,
        },
      }
    case GET_WITCH_DOCTOR:
      return {
        ...state,
        witchDoctor: action.payload,
      }
    case GET_WITCH_DOCTOR_IMAGE:
      return {
        ...state,
        witchDoctor: {
          ...state.witchDoctor,
          icon: action.payload,
        },
      }
    case GET_WIZARD:
      return {
        ...state,
        wizard: action.payload,
      }
    case GET_WIZARD_IMAGE:
      return {
        ...state,
        wizard: {
          ...state.wizard,
          icon: action.payload,
        },
      }

    default:
      return state
  }
}

export default characterReducer
