import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import getTodoList from './saga.ts';
import {todoReducer} from './reducer.ts';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(todoReducer, applyMiddleware(...[sagaMiddleware]));
sagaMiddleware.run(getTodoList)

export default store;