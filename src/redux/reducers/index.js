import {combineReducers} from 'redux'
import users from './user_reducer'

const rootReducer = combineReducers({
    users:users,
})

export default rootReducer