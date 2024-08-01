import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducer';

const customizedThunk = storeAPI => next => action => {
  console.log('Dispatching:', action);
  console.log('CurrentState:', storeAPI.getState());
  const result = next(action)
  console.log('Updated State:', storeAPI.getState());
  console.log('=================================================');
  return result
}

const store = createStore(rootReducer, applyMiddleware(customizedThunk));
export default store;

