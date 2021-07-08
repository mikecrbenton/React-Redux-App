import { combineReducers } from 'redux'

import {dogReducer} from './dogReducer'
import {userReducer} from  './userReducer'

export const rootReducer = combineReducers( {
   dogReducer: dogReducer, // key: value for each reducer
   userReducer: userReducer
})