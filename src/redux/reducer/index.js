import {
    SET_APPLES,
    SHAKE_THE_TREE,
    ADD_TO_BASKET,
} from "../action/actionTypes";

// Initial state for app
const initialState = {
    isShaking: false,
    apples: [],
    movingApple: {},
    basket: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_APPLES:
            return {
                ...state,
                apples: [...action.data],
            };
        case SHAKE_THE_TREE:
            return {
                ...state,
                isShaking: !state.isShaking,
            };
        case ADD_TO_BASKET: {
            // This action finds the apple that fell on the ground.
            //Subtracts this from the apples array and adds it to the basket array
            const currentApple = state.apples.find(
                (apple) => apple.id === action.data
            );

            const newApples = [...state.apples];
            newApples.splice(state.apples.indexOf(currentApple), 1);

            return {
                ...state,
                basket: [...state.basket, currentApple],
                apples: [...newApples],
            };
        }
        default:
            return state;
    }
}
