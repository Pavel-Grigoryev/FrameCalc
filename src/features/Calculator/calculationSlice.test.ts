import {calculationActions, calculationReducer} from './index';
import {CalculationSliceType, ResultType} from './calculationSlice';

let startState: CalculationSliceType;

beforeEach(() => {
    startState = {
        result: {} as ResultType,
        isCalcDone: false
    };
});

test('result should be changed', () => {

    const result = {
        area: 25,
        costFixes: 275,
        costLists: 168,
        costPipes: 900,
        fixName: 'Cаморез',
        fixUnit: 'шт',
        listName: 'Лист-1 0.5 ширина 1.8м',
        listUnit: 'м2',
        pipeName: 'Труба 20х20',
        pipeUnit: 'мп',
        quantityFixes: 250,
        quantityLists: 14,
        stepFrameLength: '0.98',
        stepFrameWidth: '0.98',
        totalPipesLength: 50
    };

    const endState = calculationReducer(startState, calculationActions.updateCalculation({result}));
    expect(endState.result.area).toBe(25);
    expect(endState.result.pipeName).toBe('Труба 20х20');
    expect(endState.result.stepFrameWidth).toBe('0.98');
});

test('isCalcDone should be changed to true', () => {

    startState = {
        result: {
            area: 25,
            costFixes: 275,
            costLists: 168,
            costPipes: 900,
            fixName: 'Cаморез',
            fixUnit: 'шт',
            listName: 'Лист-1 0.5 ширина 1.8м',
            listUnit: 'м2',
            pipeName: 'Труба 20х20',
            pipeUnit: 'мп',
            quantityFixes: 250,
            quantityLists: 14,
            stepFrameLength: '0.98',
            stepFrameWidth: '0.98',
            totalPipesLength: 50
        },
        isCalcDone: false
    };

    const endState = calculationReducer(startState, calculationActions.setIsCalcDone());
    expect(endState.result.area).toBe(25);
    expect(endState.result.pipeName).toBe('Труба 20х20');
    expect(endState.result.stepFrameWidth).toBe('0.98');
    expect(endState.isCalcDone).toBe(true);
});

