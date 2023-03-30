import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';


//Thunks

export const updateCalculationTC = createAsyncThunk('calculation/updateCalc', (param: ResultType, thunkApI) => {
    thunkApI.dispatch(updateCalculation({result: param}));
    thunkApI.dispatch(setIsCalcDone());
});

export const calculationSlice = createSlice({
    name: 'calculation',
    initialState: {
        result: {} as ResultType,
        isCalcDone: false
    },
    reducers: {
        updateCalculation(state, action: PayloadAction<{ result: ResultType }>) {
            state.result = action.payload.result;
        },
        setIsCalcDone(state) {
            state.isCalcDone = true;
        }
    }
});

//Actions

const {updateCalculation, setIsCalcDone} = calculationSlice.actions;

export const asyncCalculationActions = {
    updateCalculationTC
};

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

export type CalculationSliceType = ReturnType<typeof calculationSlice.getInitialState>