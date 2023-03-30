import {AppInitialState} from './appSlice';
import {appActions, appReducer} from './index';

let startState: AppInitialState;

beforeEach(() => {
    startState = {
        error: null,
        isInitialized: false,
        isCartOpen: false
    };
});

test('isCartOpen should be changed', () => {
    const endState = appReducer(startState, appActions.openCart( true));
    expect(endState.isCartOpen).toBe(true);
});

test('isInitialized should be changed to true', () => {
    const endState = appReducer(startState, appActions.initializeAppTC.fulfilled(undefined, 'request', undefined));
    expect(endState.isInitialized).toBe(true);
});