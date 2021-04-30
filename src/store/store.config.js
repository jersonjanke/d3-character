import { combineReducers } from 'redux'
import characterReducer from './reducers/character.reducer'

const rootReducer = combineReducers({
    character: characterReducer
})

export default rootReducer