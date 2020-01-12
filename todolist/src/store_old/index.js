import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer.js'
import createSagaMiddleware from 'redux-saga'
import todoSagas from './saga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancer);

sagaMiddleware.run(todoSagas);
export default store;