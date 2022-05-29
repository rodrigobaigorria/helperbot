import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import { botReducer } from "../reducers/botReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    botIn: botReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
    );