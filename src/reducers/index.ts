import { combineReducers, Reducer} from 'redux';

export interface RootState {
    todos: [any];
}

export default combineReducers<RootState>({
    
});