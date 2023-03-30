import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {appReducer} from './index';
import {cartReducer} from '../features/Cart';
import {calculationReducer, configReducer, materialReducer} from '../features/Calculator';
import {loadState, saveState} from '../utils/localstorage-utis';

const cartPreloadedState = loadState();

const preloadedState = {
    cart: cartPreloadedState
};

export const rootReducer = combineReducers({
    app: appReducer,
    material: materialReducer,
    config: configReducer,
    calculation: calculationReducer,
    cart: cartReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: true,

});

store.subscribe(() => {
    saveState(store.getState().cart);
});



