import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { getUsers } from '../actions/userActions';
import { getLefts } from '../actions/leftActions';

export default function configureStore() {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
}

export const store = configureStore();

store.dispatch(getUsers());
store.dispatch(getLefts());