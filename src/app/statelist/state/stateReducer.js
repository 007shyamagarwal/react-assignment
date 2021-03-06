import * as ActionTypes from '../state/action-types';

const INITIAL_STATE = {
    states: [],
    status: false,
    error: undefined
}

export default function StateReducer(state = INITIAL_STATE, action) {
    console.log("stateReducer ", state, action);
    switch(action.type) {
        case ActionTypes.INIT_STATES:
            return { ...state, states: action.payload.states};

        case ActionTypes.LOADING:
            return { ...state, status: action.payload.status};
        case ActionTypes.ERROR:
            return {...state,error: action.payload.error};

        default:
            return state;
    }
}