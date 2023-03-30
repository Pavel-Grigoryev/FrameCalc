import {useMemo} from 'react'

import {ActionCreator, ActionCreatorsMapObject, bindActionCreators} from 'redux'
import {useAppDispatch} from "./useAppDispatch";
import {AsyncThunk} from "@reduxjs/toolkit";




type BoundActions<Actions extends ActionCreatorsMapObject> = {
    [key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any>
        ? BoundAsyncThunk<Actions[key]>
        : Actions[key];
};

type BoundAsyncThunk<Action extends ActionCreator<any>> = (
    ...args: Parameters<Action>
) => ReturnType<ReturnType<Action>>;


export const useActions = <T extends ActionCreatorsMapObject>(actions: T): BoundActions<T> => {
    const dispatch = useAppDispatch()

    return useMemo(
        () => bindActionCreators(actions, dispatch),
        [actions, dispatch]
    )
}
