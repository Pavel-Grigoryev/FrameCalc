import * as cartSelectors from './cart-selectors'
import {cartSlice} from './cartSlice'

const cartReducer = cartSlice.reducer

const cartActions = {
    ...cartSlice.actions
}


export {
    cartReducer,
    cartSelectors,
    cartActions
}