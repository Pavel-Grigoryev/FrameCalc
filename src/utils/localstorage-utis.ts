import {RowCartType} from '../features/Cart/cartSlice';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('cartState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (cartState: RowCartType[]) => {
    try {
        const serializedState = JSON.stringify(cartState);
        localStorage.setItem('cartState', serializedState);
    } catch {
        // ignore write errors
    }
};