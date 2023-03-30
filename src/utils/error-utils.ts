import axios, {AxiosError} from "axios";

export const handleAsyncServerNetworkError = (err: Error | AxiosError, thunkAPI: ThunkAPIType, showError = true) => {
    if (axios.isAxiosError<AxiosError<{ message: string; }>>(err)) {
        if (showError) {
            const error = err.response?.data ? err.response.data.message : err.message;
            //thunkAPI.dispatch(setAppErrorAC({error}));
        }
      //  thunkAPI.dispatch(setAppStatusAC({status: "failed"}));
    }
    return thunkAPI.rejectWithValue({errors: err.message});
}

//Types
// original type:
// BaseThunkAPI<S, E, D extends Dispatch = Dispatch, RejectedValue = undefined>
type ThunkAPIType = {
    dispatch: (action: any) => any
    rejectWithValue: Function
}