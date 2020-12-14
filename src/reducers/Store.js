import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import SwipeCardReducer from './SwipeCardReducer';
// import * as types from '../actions/SwipeCardAction';

const reducers = combineReducers({
    SwipeCardReducer: SwipeCardReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = store => next => action => {
    // console.log(action, store.getState());
    // if (action.type === ADD_TODO && action.payload === 'fuck') {
    //     action.payload = 'dumemay';
    // }
    return next(action);
}
export default createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(middleware),
    )
);