import {AppRootStateType} from '../../utils/types';


export const selectCalculation = (state: AppRootStateType) => state.calculation.result;

export const selectIsCalcDone = (state: AppRootStateType) => state.calculation.isCalcDone;


