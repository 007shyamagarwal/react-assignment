import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import stateReducer from './statelist/state/stateReducer';
import stateViewReducer from './statelist/state/stateViewReducer';
import stateEditReducer from './statelist/state/stateEditReducer';

const rootReducers = combineReducers({
    statesList: stateReducer,
    stateView: stateViewReducer,
    editedState:stateEditReducer
    });
    
const  store = createStore(rootReducers,applyMiddleware(thunk));
export default store;