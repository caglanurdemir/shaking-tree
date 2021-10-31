import {
    SET_APPLES,
    SHAKE_THE_TREE,
    IS_SHAKE_END,
    ADD_TO_BASKET,
} from "../action/actionTypes";

const initialState = {
    isShaking: false,
    apples: [],
    movingApple: {},
    basket: [],
    isShakeEnd: false,
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
        case IS_SHAKE_END:
            return {
                ...state,
                isShakeEnd: action.data,
            };
        case ADD_TO_BASKET: {
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
