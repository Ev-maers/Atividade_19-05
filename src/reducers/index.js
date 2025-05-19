import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import history from './history';

const rootReducer = combineReducers({
  todos: history(todos),
  visibilityFilter,
});

export default rootReducer;