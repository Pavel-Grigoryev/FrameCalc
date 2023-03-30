import * as calculationSelectors from './calculation-selectors';
import * as configSelectors from './config-selectors';
import * as materialSelectors from './material-selector';
import {asyncConfigActions, configSlice} from './configlSlice';
import {asyncCalculationActions, calculationSlice} from './calculationSlice';
import {asyncMaterialActions, materialSlice} from './materialSlice';

const calculationReducer = calculationSlice.reducer;
const configReducer = configSlice.reducer;
const materialReducer = materialSlice.reducer

const calculationActions = {
    ...asyncCalculationActions,
    ...calculationSlice.actions
};

const configActions = {
    ...asyncConfigActions
};

const materialActions = {
    ...asyncMaterialActions
}

export {
    calculationSelectors,
    configSelectors,
    materialSelectors,
    calculationActions,
    configActions,
    materialActions,
    calculationReducer,
    configReducer,
    materialReducer
};