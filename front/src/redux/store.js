import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const initState = {
  todos: []
}


export const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk)))
