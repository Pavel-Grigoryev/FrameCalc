import * as cartSelectors from './cart-selectors'
import { cartSlice, asyncCartActions} from './cartSlice'

const cartReducer = cartSlice.reducer

const cartActions = {
    ...asyncCartActions
}


export {
    cartReducer,
    cartSelectors,
    cartActions
}