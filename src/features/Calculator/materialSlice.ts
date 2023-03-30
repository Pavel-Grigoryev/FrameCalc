import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {calcAPI} from '../../api/app-api';
import {MaterialType} from '../../api/api-types';


//Thunks

export const getMaterialTC = createAsyncThunk('material/getMaterial', async () => {
    try {
        const res = await calcAPI.fetchMaterial();
        return res.data;
    } catch (e) {
    }
});

const initialState = [] as MaterialType[];

export const materialSlice = createSlice({
    name: 'material',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getMaterialTC.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export const asyncMaterialActions = {
    getMaterialTC
};

