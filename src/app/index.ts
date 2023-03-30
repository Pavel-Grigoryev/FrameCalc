import * as appSelectors from './app-seletors'
import {asyncAppActions, appSlice} from "./appSlice";

const appReducer = appSlice.reducer
const actions = appSlice.actions

const appActions = {
    ...asyncAppActions,
    ...actions
}

export {
    appSelectors,
    appReducer,
    appActions
}