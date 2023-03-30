import * as calculationSelectors from './calculation-selectors';
import {asyncCalculationActions, calculationSlice} from './calculationSlice';

const calculationReducer = calculationSlice.reducer;

const calculationActions = {
    ...asyncCalculationActions,
    ...calculationSlice.actions
};


export {
    calculationSelectors,
    calculationActions,
    calculationReducer
};