import { createStore, combineReducers, applyMiddleware } from 'redux'
import CounterReducer from '../reducers/CounterReducer'
import PatientReducer from '../reducers/PatientReducer'

import PatientSaga from '../sagas/PatientSaga'

import createMiddleWare from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

const sagaMiddleWare = createMiddleWare();

const rootReducer = combineReducers({
    CounterReducer: CounterReducer,
    PR: PatientReducer
});

//Create the Store
const Store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare)),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleWare.run(PatientSaga);

export default Store;