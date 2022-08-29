import { createStore, combineReducers } from 'redux'
import CounterReducer from '../reducers/CounterReducer'
import PatientReducer from '../reducers/PatientReducer'

const rootReducer = combineReducers({
    CounterReducer: CounterReducer,
    PatientReducer: PatientReducer
});

const Store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



export default Store;