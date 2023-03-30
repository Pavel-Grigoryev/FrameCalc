import {rootReducer} from "../app/store";
import {AnyAction, ThunkDispatch} from "@reduxjs/toolkit";

export type RootReducerType = typeof rootReducer

export type AppRootStateType = ReturnType<RootReducerType>

export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AnyAction>

export type ThunkErrorType = {
    rejectValue: { errors: string }
}

