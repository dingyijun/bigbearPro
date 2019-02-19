import { combineReducers } from 'redux'
import {user} from './user'
import {identity} from './identity'

export default combineReducers({
  user,identity
})
