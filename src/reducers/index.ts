import * as actionTypes from '../actionTypes';
import { combineReducers } from 'redux';

export const counterReducer = (state = 0, action: any) => {
    let newState;

    switch(action.type) {
        case actionTypes.ADD_COUNTER:
            return newState = state + action.payload;
        case actionTypes.REMOVE_COUNTER:
            return newState = state - action.payload;
        default:
            return state; 
    }
}

export const counterApp = combineReducers({
    counterReducer
});