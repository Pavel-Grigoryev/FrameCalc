import {AppRootStateType} from "../../utils/types";
import {createSelector} from "reselect";




const stateConfig = (state: AppRootStateType) => state.config

export const selectLengthConfig = createSelector(stateConfig, items => {
    return items.find(el => el.key === "length")
})

export const selectWidthConfig = createSelector(stateConfig, items => {
    return items.find(el => el.key === "width")
})

export const selectStrengthConfig = createSelector(stateConfig, items => {
        return items.filter(el => el.type === "frame")
})

export const selectFixConfig = createSelector(stateConfig, items => {
    return items.filter(el => el.type === "fix")
})

