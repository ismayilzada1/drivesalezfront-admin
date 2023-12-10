import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import persistReducer from "redux-persist/es/persistReducer";
import authReducer from "./Auth/AuthSlice";

const reducers=combineReducers(
    {auth:authReducer}
);

const config={
    key:'admin',
    storage,
    timeout: 14 * 60 * 60 * 1000, // 14 hours in milliseconds
};

const reducer = persistReducer(config,reducers);


const store = configureStore({
    reducer: reducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});



export default store;