import {cartActions, cartReducer} from './index';
import {RowCartType} from './cartSlice';
import {RowType} from '../CalcOutput/CalculationTable/CalculationTable';

let startState: RowCartType[];

beforeEach(() => {
    startState = [];
});

test('item should be added', () => {

    const newItem: RowType = {
        name: 'Лист-1 0.5 ширина 1.8м',
        unit: 'м2',
        quantity: 14,
        cost: 168
    };

    const endState = cartReducer(startState, cartActions.addItem({item: newItem}));
    expect(endState.length).toBe(1);
    expect(endState[0].cost).toBe(168);
    expect(endState[0].id).toBeDefined();

});

test('item should be deleted', () => {

    startState = [
        {
            name: 'Лист-1 0.5 ширина 1.8м',
            unit: 'м2',
            quantity: 14,
            cost: 168,
            id: '1'
        },
        {
            name: 'Труба 20х20',
            unit: 'мп',
            quantity: 50,
            cost: 90,
            id: '2'
        },
    ];

    const endState = cartReducer(startState, cartActions.deleteItem({id: '1'}));
    expect(endState.length).toBe(1);
    expect(endState[0].cost).toBe(90);
    expect(endState[0].id).toBe('2');

});


