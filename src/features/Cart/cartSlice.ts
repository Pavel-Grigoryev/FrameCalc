import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RowType} from "../CalcOutput/CalculationTable/CalculationTable";
import {handleAsyncServerNetworkError} from "../../utils/error-utils";
import {AxiosError} from "axios";
import {ThunkErrorType} from "../../utils/types";
import {v1} from "uuid";


//Thunks

export const addItemTC = createAsyncThunk<{ item: RowType }, { item: RowType }, ThunkErrorType>('cart/addItem', async (param, thunkAPI) => {
    try {
        return param;
    } catch (e) {
        const err = e as Error | AxiosError;
        return handleAsyncServerNetworkError(err, thunkAPI, false);
    }
})

const initialState = [] as RowCartType[]

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(addItemTC.fulfilled, (state, action) => {
            state.unshift({...action.payload.item, id: v1() })
        })
    }
})

export const asyncCartActions = {
    addItemTC
}



type RowCartType = RowType & {id?: string}