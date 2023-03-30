import {MaterialType} from '../../api/api-types';
import {materialActions, materialReducer} from './index';

test('material should be set', () => {
    const newState: MaterialType[] = [
        {
            'type': 'list',
            'name': 'Лист-1 0.5 ширина 1.8м',
            'material': 'plastic',
            'unit': 'м2',
            'width': 1.8,
            'price': 12
        },
        {
            'type': 'list',
            'name': 'Лист-2 0.5 ширина 1.5м',
            'material': 'plastic',
            'unit': 'м2',
            'width': 1.5,
            'price': 15
        }

    ];
    const endState = materialReducer([], materialActions.getMaterialTC.fulfilled(newState, 'requestId', undefined));

    expect(endState.length).toBe(2);
    expect(endState[1].material).toBe('plastic');
});