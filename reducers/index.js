import { combineReducers } from 'redux'
import feelingReducer from './feelingReducer'
import journalReducer from './journalReducer'

export default combineReducers({
  feelingReducer,
  diary: journalReducer
})
