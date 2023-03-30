import {AppRootStateType} from "../utils/types";

export const selectIsInitialized = (state: AppRootStateType) => state.app.isInitialized;

export const selectisCartOpen = (state: AppRootStateType) => state.app.isCartOpen;