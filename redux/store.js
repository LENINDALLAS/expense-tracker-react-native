import { configureStore } from '@reduxjs/toolkit'
import { createStore, combineReducers } from 'redux';
import { addReducer } from "./reducer/addReducer";

const initialState = {
    
};

const reducer = combineReducers({
    add: addReducer
});

const store = configureStore({
    reducer,
    preloadedState: initialState
})