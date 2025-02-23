import {RootState} from "../store";

export const item = (state: RootState) => state.tasks.item

export const tasksSelectors = {
    item
}