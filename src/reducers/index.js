import gamesReducer from './gamesReducer';
import gameDetailReducer from './gameDetailReducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    games: gamesReducer,
    detail : gameDetailReducer,
})

export default rootReducer;