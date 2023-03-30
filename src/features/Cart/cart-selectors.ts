import {AppRootStateType} from "../../utils/types";
import {createSelector} from "reselect";



const cartState = (state: AppRootStateType) => state.cart

export const selectItems = createSelector(cartState, items => {
    return items.map(({id, ...newEl}) => newEl)})






