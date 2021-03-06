import { combineReducers } from 'redux';
import sessionReducer from './session_reducer'
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer'
import searchReducer from './search_reducer';
// console.log("rootReducer")
const rootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer,
    search: searchReducer
});


export default rootReducer;