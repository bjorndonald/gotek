import configReducer from './configReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  config: configReducer
})

export default rootReducer
