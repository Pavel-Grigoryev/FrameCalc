import {ConfigType} from '../../api/api-types';
import {configActions, configReducer} from './index';

test('config should be set', () => {
    const newState: ConfigType[] = [
        {
            'type': 'size',
            'key': 'length',
            'name': 'Длина',
            'min': 5,
            'max': 50,
            'step': 0.2
        },
        {
            'type': 'size',
            'key': 'width',
            'name': 'Ширина',
            'min': 5,
            'max': 25,
            'step': 0.2
        },
        {
            'type': 'frame',
            'key': 'light',
            'name': 'Легкая',
            'step': 1.2
        }
    ];

    const endState = configReducer([], configActions.getConfigTC.fulfilled(newState, 'requestId', undefined));

    expect(endState.length).toBe(3);
    expect(endState[1].name).toBe('Ширина');
    expect(endState[2].type).toBe('frame');
});