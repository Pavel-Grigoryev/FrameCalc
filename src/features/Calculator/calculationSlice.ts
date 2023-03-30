import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";


//Thunks

export const updateCalculationTC = createAsyncThunk('calculation/updateCalc', (param: ResultType, thunkApI) => {
    thunkApI.dispatch(updateCalculation({result: param}))
})

const initialState = {} as ResultType

export const calculationSlice = createSlice({
    name: 'calculation',
    initialState: initialState,
    reducers: {
        updateCalculation(state, action: PayloadAction<{result: ResultType}>) {
            return action.payload.result
        }
    }
})

const {updateCalculation} = calculationSlice.actions

export const asyncCalculationActions = {
    updateCalculationTC
}

export const calculationReducer = calculationSlice.reducer

//Types

export type ResultType = {
    area: number
    quantityLists: number
    costLists: number
    costPipes: number
    stepFrameWidth: string
    stepFrameLength: string
    listName: string
    listUnit: string
    pipeName: string
    pipeUnit: string
    totalPipesLength: number
    quantityFixes: number
    costFixes: number
    fixName: string
    fixUnit: string
}