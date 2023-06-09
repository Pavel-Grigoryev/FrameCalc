import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {calcAPI} from '../../api/app-api';
import {ConfigType} from '../../api/api-types';

//Thunks

export const getConfigTC = createAsyncThunk('config/getConfig', async () => {
    try {
        debugger
        const res = await calcAPI.fetchConfig();
        return res.data;
    } catch (e) {

    }
});

const initialState = [] as ConfigType[];

export const configSlice = createSlice({
    name: 'config',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        debugger
        builder.addCase(getConfigTC.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export const asyncConfigActions = {
    getConfigTC
};

