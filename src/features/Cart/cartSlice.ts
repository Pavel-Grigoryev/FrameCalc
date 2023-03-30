import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RowType} from '../CalcOutput/CalculationTable/CalculationTable';
import {v1} from 'uuid';


const initialState = [] as RowCartType[];

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem(state, action: PayloadAction<{ item: RowType }>) {
            state.unshift({...action.payload.item, id: v1()});
        },
        deleteItem(state, action:  PayloadAction<{id: string}>) {
            const index = state.findIndex(item => item.id === action.payload.id)
            if (index > -1) {
                state.splice(index, 1)
            }
        }
    }
});

export type RowCartType = RowType & { id: string }