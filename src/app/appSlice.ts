
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

import {getConfigTC} from "../features/Calculator/configlSlice";
import {getMaterialTC} from "../features/Calculator/materialSlice";
import {ThunkErrorType} from '../utils/types';
import {AxiosError} from 'axios';
import {handleAsyncServerNetworkError} from '../utils/error-utils';


//Thunks

export const initializeAppTC = createAsyncThunk<undefined, undefined, ThunkErrorType>('app/initializeAppTC', async (param, thunkAPI) => {
        try {
            const res1 = thunkAPI.dispatch(getMaterialTC())
            const res2 =  thunkAPI.dispatch(getConfigTC())
            await Promise.all([res1, res2])
            return
        } catch (e) {
            const err = e as Error | AxiosError;
            return handleAsyncServerNetworkError(err, thunkAPI, false);
        }
    }
)

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        error: null as null | string,
        isInitialized: false,
        isCartOpen: false
    } ,
    reducers: {
        openCart(state, action: PayloadAction<boolean>) {
            state.isCartOpen = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(initializeAppTC.fulfilled, (state) => {
                state.isInitialized = true
            })
    }
})

export const asyncAppActions = {initializeAppTC}



