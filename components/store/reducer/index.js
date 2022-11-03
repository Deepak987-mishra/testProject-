import { combineReducers } from 'redux'
import GlobalReducer from './GlobalReducer'
import { types } from '../ActionTypes'
import CategoryReducer from './CategoryReducer'


const RootReducer = combineReducers({
    GlobalReducer: GlobalReducer,
    CategoryReducer:CategoryReducer,
  
})

export default RootReducer