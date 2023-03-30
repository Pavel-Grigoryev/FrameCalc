import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {materialReducer} from "../features/Calculator/materialSlice";
import {configReducer} from "../features/Calculator/configlSlice";
import {calculationReducer} from "../features/Calculator/calculationSlice";
import {appReducer} from "./index";
import {cartReducer} from "../features/Cart";

export const rootReducer = combineReducers({
    app: appReducer,
    material: materialReducer,
    config: configReducer,
    calculation: calculationReducer,
    cart: cartReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})


