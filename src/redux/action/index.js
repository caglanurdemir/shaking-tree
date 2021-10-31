import {
    SET_APPLES,
    SHAKE_THE_TREE,
    UPDATE_APPLE_OFFSET,
    ADD_TO_BASKET,
} from "./actionTypes";

export function setApples(data) {
    return {
        type: SET_APPLES,
        data,
    };
}
export function shakeTheTree() {
    return {
        type: SHAKE_THE_TREE,
    };
}
export function updateAppleOffset(data) {
    return {
        type: UPDATE_APPLE_OFFSET,
        data,
    };
}
export function addToBasket(data) {
    return {
        type: ADD_TO_BASKET,
        data,
    };
}
