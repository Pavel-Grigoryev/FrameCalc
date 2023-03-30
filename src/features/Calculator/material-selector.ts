import {AppRootStateType} from "../../utils/types";
import {createSelector} from "reselect";

const stateMaterial = (state: AppRootStateType) => state.material

export const selectMaterialsType = createSelector(stateMaterial, items => {
    return items.filter(el => el.type === "list")
})

export const selectPipesType = createSelector(stateMaterial, items => {
    return items.filter(el => el.type === "pipe")
})

export const selectFixType = createSelector(stateMaterial, items => {
    return items.find(el => el.type === "fix")
})