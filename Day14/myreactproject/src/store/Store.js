import {createStore, combineReducers} from 'redux'
import CounterReducer from '../reducers/CounterReducer'

//const rootReducer = combineReducers({CounterReducer});

const Store = createStore(CounterReducer);



export default Store;