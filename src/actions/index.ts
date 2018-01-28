import * as actionTypes from '../actionTypes';

export const addCounter = () => ({
    type: actionTypes.ADD_COUNTER,
    payload: 1
});

export const removeCounter = () => ({
    type: actionTypes.REMOVE_COUNTER,
    payload: 1
});
