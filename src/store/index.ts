import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from '../middleware';
import { counterApp } from '../reducers';
export function configureStore(initialState?: any) {
    let middleware = applyMiddleware(logger);

    if (process.env.NODE_ENV === 'development') {
        middleware = composeWithDevTools(middleware);
    }

    const store = createStore(counterApp, initialState, middleware) as Store<any>;

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}